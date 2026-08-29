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
const releaseState = fileURLToPath(
  new URL("../tools/release-state.sh", import.meta.url),
);

const FAKE_NPM = `#!/usr/bin/env bash
case "$1" in
  view)
    echo "npm error code E404" >&2
    exit 1
    ;;
  whoami)
    echo "test-user"
    exit 0
    ;;
  publish)
    echo "fake npm publish"
    exit 0
    ;;
  *)
    echo "unexpected npm command: $1" >&2
    exit 1
    ;;
esac
`;

function fakeGit(headSha) {
  return `#!/usr/bin/env bash
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
    echo "${headSha}"
    ;;
  *)
    echo "unexpected git command: $1" >&2
    exit 1
    ;;
esac
`;
}

// GITHUB_ACTIONS and GITHUB_REF decide which release-state path the publisher
// takes, so every sandbox run states them rather than inheriting the values
// this suite's own CI run happens to have.
const LOCAL_ENV = { GITHUB_ACTIONS: "", GITHUB_REF: "" };
const ACTIONS_ENV = {
  GITHUB_ACTIONS: "true",
  GITHUB_REF: "refs/heads/master",
};

function runPublisher(arguments_) {
  return spawnSync(publisher, arguments_, {
    encoding: "utf8",
    env: { ...process.env, ...LOCAL_ENV },
  });
}

/** Runs the publisher against fake git and npm in a throwaway client root. */
async function withSandbox(run, { headSha = "0123456789abcdef" } = {}) {
  const sandbox = await mkdtemp(join(tmpdir(), "albus-publish-test-"));
  const tools = join(sandbox, "tools");
  const bin = join(sandbox, "bin");

  try {
    await mkdir(tools);
    await mkdir(bin);
    await copyFile(publisher, join(tools, "publish"));
    await chmod(join(tools, "publish"), 0o755);
    await copyFile(releaseState, join(tools, "release-state.sh"));
    await writeExecutable(
      join(tools, "check"),
      "#!/usr/bin/env bash\nexit 0\n",
    );
    await writeExecutable(join(bin, "node"), "#!/usr/bin/env bash\nexit 0\n");
    await writeExecutable(join(bin, "npm"), FAKE_NPM);
    await writeExecutable(join(bin, "git"), fakeGit(headSha));

    return await run((arguments_, environment = {}) =>
      spawnSync(join(tools, "publish"), arguments_, {
        cwd: sandbox,
        encoding: "utf8",
        env: {
          ...process.env,
          NPM_TOKEN: "",
          PATH: `${bin}:${process.env.PATH}`,
          ...LOCAL_ENV,
          ...environment,
        },
      }),
    );
  } finally {
    await rm(sandbox, { force: true, recursive: true });
  }
}

test("documents the manual publisher command", () => {
  const result = runPublisher(["--help"]);
  assert.equal(result.status, 0);
  assert.match(
    result.stderr,
    /usage: .* \[--dry-run\] \[--non-interactive\] <sdk-version>/u,
  );
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

test("refuses --non-interactive outside GitHub Actions", () => {
  const result = runPublisher(["--non-interactive", "0.1.0"]);
  assert.equal(result.status, 1);
  assert.match(result.stderr, /--non-interactive is for GitHub Actions/u);
});

test("supports interactive npm authentication without a token", async () => {
  await withSandbox((publish) => {
    const result = publish(["0.1.0"]);

    assert.equal(result.status, 1);
    assert.match(
      result.stderr,
      /publishing requires an interactive confirmation/u,
    );
    assert.doesNotMatch(result.stderr, /unbound variable/u);
  });
});

test("uploads without a prompt in GitHub Actions", async () => {
  await withSandbox((publish) => {
    const result = publish(["--non-interactive", "0.1.0"], ACTIONS_ENV);

    assert.equal(result.status, 0, result.stderr);
    assert.match(result.stdout, /Published @albus-ts\/sdk@0\.1\.0/u);
  });
});

test("still prompts in GitHub Actions without the flag", async () => {
  await withSandbox((publish) => {
    const result = publish(["0.1.0"], ACTIONS_ENV);

    assert.equal(result.status, 1);
    assert.match(
      result.stderr,
      /publishing requires an interactive confirmation/u,
    );
  });
});

test("releases from a branch in GitHub Actions", async () => {
  await withSandbox((publish) => {
    const result = publish(["--non-interactive", "0.1.0"], {
      ...ACTIONS_ENV,
      GITHUB_REF: "refs/tags/v0.1.0",
    });

    assert.equal(result.status, 1);
    assert.match(result.stderr, /releases run from a branch/u);
  });
});

test("releases the pushed commit in GitHub Actions", async () => {
  await withSandbox(
    (publish) => {
      const result = publish(["--non-interactive", "0.1.0"], ACTIONS_ENV);

      assert.equal(result.status, 1);
      assert.match(result.stderr, /HEAD is not the commit on origin\/master/u);
    },
    { headSha: "deadbeefdeadbeef" },
  );
});

test("uploads only from master in GitHub Actions", async () => {
  await withSandbox((publish) => {
    const result = publish(["--non-interactive", "0.1.0"], {
      ...ACTIONS_ENV,
      GITHUB_REF: "refs/heads/topic",
    });

    assert.equal(result.status, 1);
    assert.match(result.stderr, /uploads must run from the master branch/u);
  });
});

async function writeExecutable(path, content) {
  await writeFile(path, content);
  await chmod(path, 0o755);
}
