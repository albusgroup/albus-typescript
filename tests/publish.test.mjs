import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  chmod,
  copyFile,
  mkdir,
  mkdtemp,
  rm,
  writeFile,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
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

test("supports interactive npm authentication without a token", async () => {
  const sandbox = await mkdtemp(join(tmpdir(), "albus-publish-test-"));
  const tools = join(sandbox, "tools");
  const bin = join(sandbox, "bin");

  try {
    await mkdir(tools);
    await mkdir(bin);
    await copyFile(publisher, join(tools, "publish"));
    await chmod(join(tools, "publish"), 0o755);
    await writeExecutable(
      join(tools, "check"),
      "#!/usr/bin/env bash\nexit 0\n",
    );
    await writeExecutable(
      join(bin, "node"),
      "#!/usr/bin/env bash\nexit 0\n",
    );
    await writeExecutable(
      join(bin, "npm"),
      `#!/usr/bin/env bash
case "$1" in
  view)
    echo "npm error code E404" >&2
    exit 1
    ;;
  whoami)
    echo "test-user"
    exit 0
    ;;
  *)
    echo "unexpected npm command: $1" >&2
    exit 1
    ;;
esac
`,
    );
    await writeExecutable(
      join(bin, "git"),
      `#!/usr/bin/env bash
case "$1" in
  status)
    exit 0
    ;;
  symbolic-ref)
    echo "master"
    ;;
  config)
    if [[ "$*" == *".remote" ]]; then
      echo "origin"
    else
      echo "refs/heads/master"
    fi
    ;;
  ls-remote)
    echo "0123456789abcdef refs/heads/master"
    ;;
  rev-parse)
    echo "0123456789abcdef"
    ;;
  *)
    echo "unexpected git command: $1" >&2
    exit 1
    ;;
esac
`,
    );

    const result = spawnSync(join(tools, "publish"), ["0.1.0"], {
      cwd: sandbox,
      encoding: "utf8",
      env: {
        ...process.env,
        NPM_TOKEN: "",
        PATH: `${bin}:${process.env.PATH}`,
      },
    });

    assert.equal(result.status, 1);
    assert.match(
      result.stderr,
      /publishing requires an interactive confirmation/u,
    );
    assert.doesNotMatch(result.stderr, /unbound variable/u);
  } finally {
    await rm(sandbox, { force: true, recursive: true });
  }
});

async function writeExecutable(path, content) {
  await writeFile(path, content);
  await chmod(path, 0o755);
}
