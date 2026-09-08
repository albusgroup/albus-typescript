/*
 * Authenticate with the browser session `albus login` stored on disk.
 *
 * When neither `apiKey` nor `ALBUS_API_KEY` supplies a credential, a request
 * is sent as the signed-in user, acting in the organization that session
 * selected. The file is the one the albus CLI writes: one entry per API base
 * URL under the config directory. Only a Node-like runtime has a file system;
 * anywhere else the request goes out without a credential.
 */

import { BeforeRequestContext, BeforeRequestHook } from "./types.js";

const CONFIG_DIR_ENV = "ALBUS_CONFIG_DIR";
const XDG_CONFIG_HOME_ENV = "XDG_CONFIG_HOME";
const FILE_NAME = "credentials.json";
const VERSION = 1;
const ORGANIZATION_HEADER = "X-Albus-Organization";

type StoredSession = {
  accessToken: string;
  organization: string | null;
};

type FileSystem = {
  readFile: (path: string, encoding: "utf8") => Promise<string>;
};

type NodeGlobals = {
  process?: {
    env?: Record<string, string | undefined>;
    versions?: { node?: string };
  };
};

export class StoredSessionHook implements BeforeRequestHook {
  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    if (request.headers.has("Authorization")) {
      return request;
    }

    const stored = await storedSession(String(hookCtx.baseURL));
    if (stored === null) {
      return request;
    }

    request.headers.set("Authorization", `Bearer ${stored.accessToken}`);
    if (stored.organization !== null) {
      request.headers.set(ORGANIZATION_HEADER, stored.organization);
    }

    return request;
  }
}

function nodeEnvironment(): Record<string, string | undefined> | null {
  const { process } = globalThis as NodeGlobals;
  if (process?.versions?.node === undefined) {
    return null;
  }

  return process.env ?? {};
}

export function credentialsPath(
  environment: Record<string, string | undefined>,
): string | null {
  const configured = environment[CONFIG_DIR_ENV];
  if (configured) {
    return `${configured}/${FILE_NAME}`;
  }

  const xdg = environment[XDG_CONFIG_HOME_ENV];
  if (xdg) {
    return `${xdg}/albus/${FILE_NAME}`;
  }

  const home = environment["HOME"] ?? environment["USERPROFILE"];
  if (home) {
    return `${home}/.config/albus/${FILE_NAME}`;
  }

  return null;
}

/**
 * The stored access token and selected organization for baseURL.
 *
 * Anything that is not a readable credentials file with an entry for this
 * API counts as no session: the request then goes out without a credential
 * and the server's 401 says to sign in.
 */
export async function storedSession(
  baseURL: string,
): Promise<StoredSession | null> {
  const environment = nodeEnvironment();
  if (environment === null) {
    return null;
  }

  const path = credentialsPath(environment);
  if (path === null) {
    return null;
  }

  let document: unknown;
  try {
    const fileSystem: FileSystem = await import(
      /* @vite-ignore */ "node:" + "fs/promises"
    );
    document = JSON.parse(await fileSystem.readFile(path, "utf8"));
  } catch {
    return null;
  }

  return parseStoredSession(document, baseURL);
}

export function parseStoredSession(
  document: unknown,
  baseURL: string,
): StoredSession | null {
  if (!isRecord(document) || document["version"] !== VERSION) {
    return null;
  }

  const entries = document["credentials"];
  if (!isRecord(entries)) {
    return null;
  }

  const entry = entries[baseURL.replace(/\/+$/, "")];
  if (!isRecord(entry)) {
    return null;
  }

  const accessToken = entry["access_token"];
  if (typeof accessToken !== "string" || accessToken === "") {
    return null;
  }

  const organization = entry["organization_id"];

  return {
    accessToken,
    organization: typeof organization === "string" ? organization : null,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
