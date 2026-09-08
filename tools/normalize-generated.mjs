import {
  cpSync,
  existsSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const toolsDirectory = dirname(fileURLToPath(import.meta.url));
const repositoryRoot = dirname(toolsDirectory);

const publishingPrompt = `> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


`;

const notReadyPattern =
  /<br \/><br \/>\n> \[!IMPORTANT\]\n> This SDK is not yet ready for production use\.[^\n]*\n\n/;

const developmentBlock = `# Development

## Regeneration

Regeneration requires Node, Speakeasy authentication, and the Speakeasy CLI
version pinned in \`.speakeasy/workflow.yaml\`.

Run the generator with the SDK version to produce:

\`\`\`bash
./tools/generate 0.1.0
\`\`\`

The source is the authoritative \`api/openapi.yaml\` in the Albus repository,
where this SDK is developed; pass a path as a second argument only to preview
against a different specification.

Review and commit the OpenAPI snapshot, generated source, documentation,
package metadata, and Speakeasy lock files together.

## Checks

Run the complete local validation:

\`\`\`bash
./tools/check
\`\`\`

The check lints the OpenAPI document and TypeScript source, builds and tests the
SDK, audits production dependencies, validates the npm tarball contents, and
installs the packed SDK in an isolated project. A machine without the pinned
Speakeasy CLI runs \`./tools/check --without-speakeasy\`, which skips the
specification lint.

## Releases

Publishing is manual. Follow [RELEASING.md](RELEASING.md) to validate and
publish a generated version with the guarded local scripts.

`;

// The SDK has one server, so the generated index selection goes; apiKey is a
// string, so the generated per-request callback form goes; and an empty
// apiKey means no apiKey, so the environment and the stored browser session
// still apply. Each replacement is exact so a generator bump cannot drift
// past it unnoticed.
const generatedSourceEdits = {
  "src/lib/config.ts": [
    [
      "  apiKey?: string | (() => Promise<string>) | undefined;\n",
      "  apiKey?: string | undefined;\n",
    ],
    [
      `  /**
   * Allows overriding the default server used by the SDK
   */
  serverIdx?: number | undefined;
`,
      "",
    ],
    [
      `  if (!serverURL) {
    const serverIdx = options.serverIdx ?? 0;
    if (serverIdx < 0 || serverIdx >= ServerList.length) {
      throw new Error(\`Invalid server index \${serverIdx}\`);
    }
    serverURL = ServerList[serverIdx] || "";
  }
`,
      `  if (!serverURL) {
    serverURL = ServerList[0];
  }
`,
    ],
  ],
  "src/lib/security.ts": [
    [
      "        value: security?.apiKey ?? env().ALBUS_API_KEY,\n",
      "        value: security?.apiKey || env().ALBUS_API_KEY,\n",
    ],
  ],
};

function normalizeGeneratedSource() {
  for (const [relativePath, edits] of Object.entries(generatedSourceEdits)) {
    const path = join(repositoryRoot, relativePath);
    let content = readFileSync(path, "utf8");
    for (const [generated, wanted] of edits) {
      if (!content.includes(generated)) {
        throw new Error(
          `expected generated text in ${relativePath}:\n${generated}`,
        );
      }
      content = content.replace(generated, wanted);
    }
    writeFileSync(path, content);
  }
}

function normalizeText(path) {
  const lines = readFileSync(path, "utf8")
    .split(/\r?\n/)
    .map((line) => line.replace(/[ \t]+$/u, ""));

  while (lines.length > 0 && lines.at(-1) === "") {
    lines.pop();
  }

  writeFileSync(path, `${lines.join("\n")}\n`);
}

function normalizeReadme() {
  const path = join(repositoryRoot, "README.md");
  let content = readFileSync(path, "utf8");

  content = content.replace(notReadyPattern, "");
  content = content.replace(publishingPrompt, "");

  for (const manager of ["npm", "pnpm", "bun", "yarn"]) {
    content = content.replace(
      `${manager} add https://github.com/albusgroup/albus-typescript`,
      `${manager} add @albus-ts/sdk`,
    );
  }

  if (!content.includes("## Quickstart")) {
    throw new Error("expected the handwritten Quickstart section");
  }

  if (!content.includes("## Regeneration")) {
    content = content.replace(
      "# Development\n\n## Maturity",
      `${developmentBlock}## Maturity`,
    );
  }

  if (
    content.includes("not yet ready for production use") ||
    content.includes("finish publishing your SDK") ||
    content.includes("add https://github.com/albusgroup/albus-typescript")
  ) {
    throw new Error("unexpected pre-publication text in README.md");
  }

  writeFileSync(path, content);
  normalizeText(path);
}

function normalizeContributing() {
  cpSync(
    join(repositoryRoot, "tools/templates/CONTRIBUTING.md"),
    join(repositoryRoot, "CONTRIBUTING.md"),
  );
}

function normalizeGitignore() {
  const path = join(repositoryRoot, ".gitignore");
  let content = readFileSync(path, "utf8");
  if (!content.split(/\r?\n/u).includes("/.tmp/")) {
    content += "\n/.tmp/\n";
  }
  writeFileSync(path, content);
  normalizeText(path);
}

function normalizePackageJson() {
  const path = join(repositoryRoot, "package.json");
  const packageJson = JSON.parse(readFileSync(path, "utf8"));
  packageJson.repository = {
    type: "git",
    url: "git+https://github.com/albusgroup/albus-typescript.git",
  };
  writeFileSync(path, `${JSON.stringify(packageJson, null, 2)}\n`);
}

function main() {
  normalizeReadme();
  normalizeContributing();
  normalizeGitignore();
  normalizePackageJson();
  normalizeGeneratedSource();

  for (const generatedDirectory of ["examples", ".devcontainer"]) {
    rmSync(join(repositoryRoot, generatedDirectory), {
      force: true,
      recursive: true,
    });
  }

  const mergedFiles = [
    "FUNCTIONS.md",
    "jsr.json",
    "package.json",
    "tsconfig.json",
    "docs/sdks/secrets/README.md",
    "docs/sdks/sessions/README.md",
    "docs/sdks/tokens/README.md",
  ];
  for (const path of mergedFiles) {
    normalizeText(join(repositoryRoot, path));
  }
}

main();
