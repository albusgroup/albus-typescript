import assert from "node:assert/strict";
import test from "node:test";

import { Albus, HTTPClient } from "../esm/index.js";
import { ErrUnauthorized } from "../esm/models/errors/index.js";

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
    security: { apiKeyAuth: "organization-key" },
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
        messages: [
          {
            cursor: 1,
            invocation_id: "invocation-1",
            role: "assistant",
            content: "hi",
            created_at: "2026-01-01T00:00:00Z",
          },
        ],
      });
    },
  });
  const albus = new Albus({
    httpClient,
    security: { apiKeyAuth: "organization-key" },
  });

  const response = await albus.sessions.runSession({
    id: "demo",
    idempotencyKey: "invocation-1",
    waitTimeoutSeconds: 30,
    body: {
      userPrompt: "hello",
      agentName: "support-triage",
      agent: { model: { name: "gemini-2.5-pro" } },
    },
  });

  assert.equal(response.result.session.state, "DONE");
  assert.equal(response.result.messages[0].content, "hi");
});

test("omits the long-poll parameter for a fire-and-forget run", async () => {
  const httpClient = new HTTPClient({
    fetcher: async (request) => {
      assert.equal(request.url, "https://albus.sh/api/sessions/demo");
      return jsonResponse({
        session: sessionBody("RUNNING"),
        messages: [],
      });
    },
  });
  const albus = new Albus({
    httpClient,
    security: { apiKeyAuth: "organization-key" },
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
    security: { bearerAuth: "user-token" },
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
