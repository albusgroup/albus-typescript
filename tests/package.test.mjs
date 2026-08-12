import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const packageText = await readFile(
  new URL("../package.json", import.meta.url),
  "utf8",
);
const packageJson = JSON.parse(packageText);
const jsrJson = JSON.parse(
  await readFile(new URL("../jsr.json", import.meta.url), "utf8"),
);

test("publishes the intended public package metadata", () => {
  assert.equal(packageJson.name, "@albus-ts/sdk");
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

test("keeps jsr.json coherent with the npm package", async () => {
  assert.equal(jsrJson.name, packageJson.name);
  assert.equal(jsrJson.version, packageJson.version);

  for (const target of Object.values(jsrJson.exports)) {
    await access(new URL(`../${target}`, import.meta.url));
  }

  for (const included of jsrJson.publish.include) {
    if (included.includes("*")) {
      continue;
    }

    await access(new URL(`../${included}`, import.meta.url));
  }
});
