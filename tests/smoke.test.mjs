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
