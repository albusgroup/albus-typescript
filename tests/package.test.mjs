import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const packageText = await readFile(
  new URL("../package.json", import.meta.url),
  "utf8",
);
const packageJson = JSON.parse(packageText);

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
    "git+https://github.com/albusgroup/albus-typescript.git",
  );
  assert.equal(
    packageText.match(/^\s*"repository":/gmu)?.length,
    1,
  );
  assert.deepEqual(packageJson.files, ["esm", "src", "RUNTIMES.md"]);
});
