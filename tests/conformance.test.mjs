// Spec-conformance tests: the real fetch client against a mock of the spec.
//
// tests/smoke.test.mjs substitutes an HTTPClient fetcher, so nothing there
// exercises a request the SDK put on a socket, and nothing checks that the
// generated client still agrees with the specification it was generated from.
// These do: tools/conformance mocks openapi/openapi.yaml with Prism and points
// the SDK at it, so an operation that sends what the spec rejects fails here,
// and so does one whose documented response the client cannot parse.
//
// The mock answers from the spec, not from the service, so this proves the
// client matches the contract — never that the service implements it.

import assert from "node:assert/strict";
import test from "node:test";

import { Albus } from "../esm/index.js";

const serverURL = process.env.ALBUS_CONFORMANCE_URL ?? "";
const options = {
  skip: serverURL === ""
    ? "ALBUS_CONFORMANCE_URL is unset; run these through tools/conformance"
    : false,
};

// The spec allows `bearer_auth` alone on the token operations, so an apiKey
// client is answered with a spec-correct 401 there.
const albus = () => new Albus({ serverURL, security: { apiKey: "key" } });
const bearerAlbus = () =>
  new Albus({ serverURL, security: { bearerAuth: "token" } });

test("health answers the documented shape", options, async () => {
  assert.equal(typeof (await albus().health.health()).status, "string");
});

test("whoami answers the documented shape", options, async () => {
  assert.ok(await albus().auth.whoami());
});

test("models are listed", options, async () => {
  assert.ok(Array.isArray((await albus().models.listModels()).models));
});

test("sessions are listed, read, run, and deleted", options, async () => {
  const sdk = albus();

  assert.ok(Array.isArray((await sdk.sessions.listSessions()).sessions));
  assert.ok(await sdk.sessions.getSession({ id: "conformance" }));
  assert.ok(
    await sdk.sessions.getSessionAudit({ id: "conformance", limit: 10 }),
  );

  const run = await sdk.sessions.runSession({
    id: "conformance",
    invocationKey: "conformance-invocation",
    waitTimeoutSeconds: 0,
    body: {
      userPrompt: "What is the conformance of this client?",
      agentName: "conformance",
      agent: {
        model: { name: "gemini-3.6-flash" },
        tools: { webSearch: {} },
      },
    },
  });
  assert.ok(run.result);

  await sdk.sessions.deleteSession({ id: "conformance" });
});

test("secrets are listed, created, read, and deleted", options, async () => {
  const sdk = albus();

  assert.ok(Array.isArray((await sdk.secrets.listSecrets()).secrets));
  assert.ok(
    await sdk.secrets.createSecret({ name: "conformance", value: "value" }),
  );
  assert.ok(await sdk.secrets.getSecret({ name: "conformance" }));
  await sdk.secrets.deleteSecret({ name: "conformance" });
});

test("tokens are listed, created, read, and deleted", options, async () => {
  const sdk = bearerAlbus();

  assert.ok(Array.isArray((await sdk.tokens.listTokens()).tokens));
  assert.ok(await sdk.tokens.createToken({ name: "conformance" }));
  assert.ok(await sdk.tokens.getToken({ id: "conformance" }));
  await sdk.tokens.deleteToken({ id: "conformance" });
});

test("agents and their revisions are read", options, async () => {
  const sdk = albus();

  assert.ok(Array.isArray((await sdk.agents.listAgents()).agents));
  assert.ok(await sdk.agents.getAgent({ name: "conformance" }));
  assert.ok(
    await sdk.agents.getAgentRevision({ name: "conformance", revision: "1" }),
  );
});
