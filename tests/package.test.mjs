import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const packageJson = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8"),
);

test("publishes the intended public package metadata", () => {
  assert.equal(packageJson.name, "@albus/sdk");
  assert.match(
    packageJson.version,
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/u,
  );
  assert.equal(packageJson.license, "MIT");
  assert.equal(packageJson.type, "module");
  assert.equal(packageJson.publishConfig.access, "public");
  assert.equal(
    packageJson.repository.url,
    "https://github.com/albusgroup/albus-typescript",
  );
  assert.deepEqual(packageJson.files, ["esm", "src", "RUNTIMES.md"]);
});
