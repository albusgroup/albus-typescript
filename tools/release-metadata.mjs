import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const toolsDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = dirname(toolsDirectory);
const packageName = "@albus-ts/sdk";
const semverPattern =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/u;

function fail(message) {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validateVersion(version) {
  if (!semverPattern.test(version)) {
    fail(`SDK version must be a normalized SemVer version: ${version}`);
  }
}

function readJson(path) {
  return JSON.parse(readFileSync(join(repositoryRoot, path), "utf8"));
}

function generatedVersion() {
  const content = readFileSync(
    join(repositoryRoot, "src/lib/config.ts"),
    "utf8",
  );
  const match = content.match(/^\s*sdkVersion: "([^"]+)",$/mu);
  if (match === null) {
    fail("could not read sdkVersion from src/lib/config.ts");
  }
  return match[1];
}

function configuredVersion() {
  const content = readFileSync(
    join(repositoryRoot, ".speakeasy/gen.yaml"),
    "utf8",
  );
  const typescript = content.match(
    /^typescript:\n(?<body>(?:^[ \t].*(?:\n|$))*)/mu,
  );
  const version = typescript?.groups?.body.match(
    /^  version: ([^\s]+)$/mu,
  );
  if (version === undefined || version === null) {
    fail("could not read TypeScript version from .speakeasy/gen.yaml");
  }
  return version[1];
}

function repositoryVersions() {
  const packageJson = readJson("package.json");
  const packageLock = readJson("package-lock.json");
  return {
    ".speakeasy/gen.yaml": configuredVersion(),
    "jsr.json": readJson("jsr.json").version,
    "package.json": packageJson.version,
    "package-lock.json": packageLock.packages[""].version,
    "src/lib/config.ts": generatedVersion(),
  };
}

function validateRepositoryVersions(expected) {
  validateVersion(expected);
  const versions = repositoryVersions();
  const mismatches = Object.entries(versions)
    .filter(([, version]) => version !== expected)
    .map(([path, version]) => `${path} has ${version}`);

  if (mismatches.length > 0) {
    fail(`expected version ${expected}; ${mismatches.join(", ")}`);
  }
}

async function readStdin() {
  let input = "";
  process.stdin.setEncoding("utf8");
  for await (const chunk of process.stdin) {
    input += chunk;
  }
  return input;
}

async function validatePackage(expected) {
  validateRepositoryVersions(expected);
  const report = JSON.parse(await readStdin())[0];
  if (report.name !== packageName || report.version !== expected) {
    fail(
      `tarball is ${report.name}@${report.version}, expected ` +
        `${packageName}@${expected}`,
    );
  }

  const paths = report.files.map(({ path }) => path);
  const required = [
    "LICENSE",
    "README.md",
    "RUNTIMES.md",
    "esm/index.d.ts",
    "esm/index.js",
    "package.json",
    "src/index.ts",
  ];
  const missing = required.filter((path) => !paths.includes(path));
  if (missing.length > 0) {
    fail(`tarball is missing required files: ${missing.join(", ")}`);
  }

  const forbidden = paths.filter(
    (path) =>
      path.includes("node_modules") ||
      path.startsWith(".speakeasy/") ||
      path.startsWith("docs/") ||
      path.startsWith("openapi/") ||
      path.startsWith("tests/") ||
      path.startsWith("tools/"),
  );
  if (forbidden.length > 0) {
    fail(`tarball contains forbidden files: ${forbidden.join(", ")}`);
  }

  if (report.unpackedSize > 2_000_000) {
    fail(`tarball unpacked size is unexpectedly large: ${report.unpackedSize}`);
  }
  if (report.bundled.length > 0) {
    fail(`tarball unexpectedly bundles dependencies: ${report.bundled}`);
  }

  console.log(
    `Package contents valid: ${report.entryCount} files, ` +
      `${report.unpackedSize} bytes unpacked.`,
  );
}

const [command, version] = process.argv.slice(2);
if (command === undefined || version === undefined) {
  fail("usage: release-metadata.mjs <validate|versions|package> <version>");
}

if (command === "validate") {
  validateVersion(version);
  console.log(`Version is valid SemVer: ${version}`);
} else if (command === "versions") {
  validateRepositoryVersions(version);
  console.log(`Release metadata matches version ${version}.`);
} else if (command === "package") {
  await validatePackage(version);
} else {
  fail(`unknown command: ${command}`);
}
