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

Regenerate from the authoritative Albus OpenAPI specification:

\`\`\`bash
./tools/generate /path/to/albus/api/openapi.yaml 0.1.0
\`\`\`

Review and commit the OpenAPI snapshot, generated source, documentation,
package metadata, and Speakeasy lock files together.

## Checks

Run the complete local validation:

\`\`\`bash
./tools/check
\`\`\`

The check lints the OpenAPI document and TypeScript source, builds and tests the
SDK, audits production dependencies, validates the npm tarball contents, and
installs the packed SDK in an isolated project.

`;

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
      `${manager} add @albus/sdk`,
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

function main() {
  normalizeReadme();
  normalizeContributing();
  normalizeGitignore();

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
