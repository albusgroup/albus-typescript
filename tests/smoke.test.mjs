import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir as osTmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

import { Albus, HTTPClient } from "../esm/index.js";
import { resetEnv } from "../esm/lib/env.js";
import { ErrUnauthorized } from "../esm/models/errors/index.js";

const tmpdir = join(osTmpdir(), "albus-sdk-test-");

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    headers: { "content-type": "application/json" },
    status,
  });
}

function sessionBody(state) {
  return {
    id: "demo",
    state,
    invocation_count: 1,
    agent_name: "support-triage",
    created_at: "2026-01-01T00:00:00Z",
    updated_at: "2026-01-01T00:00:01Z",
  };
}

test("uses the production URL by default", async () => {
  const httpClient = new HTTPClient({
    fetcher: async (request) => {
      assert.equal(request.method, "GET");
      assert.equal(request.url, "https://albus.sh/api/health");
      return jsonResponse({ status: "ok" });
    },
  });

  const response = await new Albus({ httpClient }).health.health();
  assert.equal(response.status, "ok");
});

test("sends an organization key as a bearer credential", async () => {
  const httpClient = new HTTPClient({
    fetcher: async (request) => {
      assert.equal(request.url, "https://albus.sh/api/sessions");
      assert.equal(
        request.headers.get("authorization"),
        "Bearer organization-key",
      );
      return jsonResponse({ sessions: [] });
    },
  });
  const albus = new Albus({
    httpClient,
    apiKey: "organization-key",
  });

  const response = await albus.sessions.listSessions();
  assert.deepEqual(response.sessions, []);
});

test("long-polls a run with wait_timeout_seconds", async () => {
  const httpClient = new HTTPClient({
    fetcher: async (request) => {
      assert.equal(request.method, "POST");
      assert.equal(
        request.url,
        "https://albus.sh/api/sessions/demo?wait_timeout_seconds=30",
      );
      assert.equal(request.headers.get("idempotency-key"), "invocation-1");
      assert.deepEqual(await request.json(), {
        user_prompt: "hello",
        agent_name: "support-triage",
        agent: { model: { name: "gemini-2.5-pro" } },
      });
      return jsonResponse({
        session: sessionBody("DONE"),
        message: {
          cursor: 1,
          invocation_key: "invocation-1",
          role: "assistant",
          content: "hi",
          created_at: "2026-01-01T00:00:00Z",
        },
      });
    },
  });
  const albus = new Albus({
    httpClient,
    apiKey: "organization-key",
  });

  const response = await albus.sessions.runSession({
    id: "demo",
    invocationKey: "invocation-1",
    waitTimeoutSeconds: 30,
    body: {
      userPrompt: "hello",
      agentName: "support-triage",
      agent: { model: { name: "gemini-2.5-pro" } },
    },
  });

  assert.equal(response.result.session.state, "DONE");
  assert.equal(response.result.message.content, "hi");
});

test("defaults a run to a 30-minute wait", async () => {
  const httpClient = new HTTPClient({
    fetcher: async (request) => {
      assert.equal(
        request.url,
        "https://albus.sh/api/sessions/demo?wait_timeout_seconds=1800",
      );
      return jsonResponse({ session: sessionBody("RUNNING") });
    },
  });
  const albus = new Albus({
    httpClient,
    apiKey: "organization-key",
  });

  const response = await albus.sessions.runSession({
    id: "demo",
    body: {
      userPrompt: "hello",
      agentName: "support-triage",
      agent: { model: { name: "gemini-2.5-pro" } },
    },
  });

  assert.equal(response.result.session.state, "RUNNING");
});

test("uses zero for a fire-and-forget run", async () => {
  const httpClient = new HTTPClient({
    fetcher: async (request) => {
      assert.equal(
        request.url,
        "https://albus.sh/api/sessions/demo?wait_timeout_seconds=0",
      );
      return jsonResponse({ session: sessionBody("RUNNING") });
    },
  });
  const albus = new Albus({
    httpClient,
    apiKey: "organization-key",
  });

  const response = await albus.sessions.runSession({
    id: "demo",
    waitTimeoutSeconds: 0,
    body: {
      userPrompt: "hello",
      agentName: "support-triage",
      agent: { model: { name: "gemini-2.5-pro" } },
    },
  });

  assert.equal(response.result.session.state, "RUNNING");
  assert.equal(response.result.message, undefined);
});

test("sends a user token and returns typed errors", async () => {
  const httpClient = new HTTPClient({
    fetcher: async (request) => {
      assert.equal(request.url, "https://albus.sh/api/tokens");
      assert.equal(request.headers.get("authorization"), "Bearer user-token");
      return jsonResponse({ message: "invalid user token" }, 401);
    },
  });
  const albus = new Albus({
    httpClient,
    apiKey: "user-token",
  });

  await assert.rejects(
    () => albus.tokens.listTokens(),
    (error) => {
      assert.ok(error instanceof ErrUnauthorized);
      assert.equal(error.statusCode, 401);
      assert.equal(error.data$.message, "invalid user token");
      return true;
    },
  );
});

test("the client takes an apiKey string and a serverURL, nothing generated", () => {
  const options = readFileSync(
    new URL("../esm/lib/config.d.ts", import.meta.url),
    "utf8",
  );
  assert.match(options, /^\s+apiKey\?: string \| undefined;$/m);
  assert.match(options, /^\s+serverURL\?: string \| undefined;$/m);
  for (const removed of [
    "security",
    "serverIdx",
    "xAlbusOrganization",
    "Promise<string>",
  ]) {
    assert.doesNotMatch(options, new RegExp(removed));
  }
});

function withEnvironment(values, run) {
  const saved = {};
  for (const [name, value] of Object.entries(values)) {
    saved[name] = process.env[name];
    if (value === undefined) {
      delete process.env[name];
    } else {
      process.env[name] = value;
    }
  }
  resetEnv();
  return Promise.resolve()
    .then(run)
    .finally(() => {
      for (const [name, value] of Object.entries(saved)) {
        if (value === undefined) {
          delete process.env[name];
        } else {
          process.env[name] = value;
        }
      }
      resetEnv();
    });
}

function authorizationProbe() {
  const seen = {};
  const httpClient = new HTTPClient({
    fetcher: async (request) => {
      seen.authorization = request.headers.get("authorization");
      seen.organization = request.headers.get("x-albus-organization");
      return jsonResponse({ sessions: [] });
    },
  });
  return { httpClient, seen };
}

function writeStoredSession(directory, entry) {
  writeFileSync(
    join(directory, "credentials.json"),
    JSON.stringify({
      version: 1,
      credentials: { "https://albus.sh/api": entry },
    }),
  );
}

test("ALBUS_API_KEY applies when apiKey is unset or empty", async () => {
  await withEnvironment(
    { ALBUS_API_KEY: "env-key", ALBUS_CONFIG_DIR: mkdtempSync(tmpdir) },
    async () => {
      for (const apiKey of [undefined, ""]) {
        const { httpClient, seen } = authorizationProbe();
        await new Albus({ httpClient, apiKey }).sessions.listSessions();
        assert.equal(seen.authorization, "Bearer env-key");
        assert.equal(seen.organization, null);
      }
    },
  );
});

test("an explicit apiKey wins over ALBUS_API_KEY", async () => {
  await withEnvironment({ ALBUS_API_KEY: "env-key" }, async () => {
    const { httpClient, seen } = authorizationProbe();
    await new Albus({ httpClient, apiKey: "explicit" }).sessions
      .listSessions();
    assert.equal(seen.authorization, "Bearer explicit");
  });
});

test("the stored login session applies when no API key is set", async () => {
  const directory = mkdtempSync(tmpdir);
  writeStoredSession(directory, {
    access_token: "session-token",
    organization_id: "org_123",
  });
  await withEnvironment(
    { ALBUS_API_KEY: undefined, ALBUS_CONFIG_DIR: directory },
    async () => {
      const { httpClient, seen } = authorizationProbe();
      await new Albus({ httpClient }).sessions.listSessions();
      assert.equal(seen.authorization, "Bearer session-token");
      assert.equal(seen.organization, "org_123");
    },
  );
});

test("the stored session is keyed by server URL and yields to an API key", async () => {
  const directory = mkdtempSync(tmpdir);
  writeStoredSession(directory, { access_token: "session-token" });
  await withEnvironment(
    { ALBUS_API_KEY: undefined, ALBUS_CONFIG_DIR: directory },
    async () => {
      let probe = authorizationProbe();
      await new Albus({ httpClient: probe.httpClient, apiKey: "key" }).sessions
        .listSessions();
      assert.equal(probe.seen.authorization, "Bearer key");
      assert.equal(probe.seen.organization, null);

      probe = authorizationProbe();
      await new Albus({
        httpClient: probe.httpClient,
        serverURL: "http://localhost:8080",
      }).sessions.listSessions();
      assert.equal(probe.seen.authorization, null);
    },
  );
});

test("XDG_CONFIG_HOME and HOME locate the stored session", async () => {
  const xdg = mkdtempSync(tmpdir);
  mkdirSync(join(xdg, "albus"));
  writeStoredSession(join(xdg, "albus"), { access_token: "xdg-token" });
  const home = mkdtempSync(tmpdir);
  mkdirSync(join(home, ".config", "albus"), { recursive: true });
  writeStoredSession(join(home, ".config", "albus"), {
    access_token: "home-token",
  });
  await withEnvironment(
    {
      ALBUS_API_KEY: undefined,
      ALBUS_CONFIG_DIR: undefined,
      XDG_CONFIG_HOME: xdg,
      HOME: home,
    },
    async () => {
      let probe = authorizationProbe();
      await new Albus({ httpClient: probe.httpClient }).sessions
        .listSessions();
      assert.equal(probe.seen.authorization, "Bearer xdg-token");

      delete process.env.XDG_CONFIG_HOME;
      probe = authorizationProbe();
      await new Albus({ httpClient: probe.httpClient }).sessions
        .listSessions();
      assert.equal(probe.seen.authorization, "Bearer home-token");
    },
  );
});

test("a missing or malformed credentials file means no credential", async () => {
  const directory = mkdtempSync(tmpdir);
  await withEnvironment(
    { ALBUS_API_KEY: undefined, ALBUS_CONFIG_DIR: directory },
    async () => {
      let probe = authorizationProbe();
      await new Albus({ httpClient: probe.httpClient }).sessions
        .listSessions();
      assert.equal(probe.seen.authorization, null);

      writeFileSync(join(directory, "credentials.json"), "{not json");
      probe = authorizationProbe();
      await new Albus({ httpClient: probe.httpClient }).sessions
        .listSessions();
      assert.equal(probe.seen.authorization, null);
    },
  );
});
