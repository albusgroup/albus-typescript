import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const publisher = fileURLToPath(new URL("../tools/publish", import.meta.url));

function runPublisher(arguments_) {
  return spawnSync(publisher, arguments_, {
    encoding: "utf8",
  });
}

test("documents the manual publisher command", () => {
  const result = runPublisher(["--help"]);
  assert.equal(result.status, 0);
  assert.match(result.stderr, /usage: .* \[--dry-run\] <sdk-version>/u);
  assert.match(result.stderr, /without uploading/u);
});

test("rejects unknown publisher options", () => {
  const result = runPublisher(["--unknown"]);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /unknown option: --unknown/u);
});

test("requires exactly one SDK version", () => {
  const result = runPublisher([]);
  assert.equal(result.status, 2);
  assert.match(result.stderr, /<sdk-version>/u);
});
