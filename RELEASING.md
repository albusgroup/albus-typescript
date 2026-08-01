# Releasing the TypeScript SDK

Releases are intentionally manual during the MVP. The repository provides a
guarded publisher, but it does not create commits, tags, GitHub releases, npm
accounts, organizations, or credentials.

## One-time npm setup

1. Create an npm account, verify its email address, enable two-factor
   authentication, and save the recovery codes.
2. Create or join the `albus` npm organization and confirm that the account may
   publish packages in the `@albus` scope.
3. Log in from the release machine:

   ```bash
   npm login --registry=https://registry.npmjs.org/
   npm whoami --registry=https://registry.npmjs.org/
   ```

Interactive login with two-factor authentication is the preferred MVP setup.
The npm CLI stores and manages that login outside this repository.

As an alternative, create a granular access token with read/write access
limited to the `@albus` scope. A token used for publishing must be allowed to
bypass two-factor authentication. Give it a short expiration and keep it in a
password manager.

Never put an npm credential in this repository, a command-line argument, shell
history, or a pull request.

## Choose a version

Use normalized semantic versioning. During the pre-1.0 MVP:

- Increment the patch version for compatible SDK fixes, documentation-only
  regeneration, and other compatible changes.
- Increment the minor version for additive API changes.
- Increment the minor version for intentional breaking API changes and call
  out the breakage in the pull request.

The publisher assigns stable versions to npm's `latest` tag and prerelease
versions to `next`. Confirm the version before generation: npm never allows a
published package name and version combination to be reused.

## Prepare a release

1. Regenerate the SDK on a branch using the new version:

   ```bash
   ./tools/generate /path/to/albus/api/openapi.yaml 0.1.0
   ```

2. Review the OpenAPI snapshot and generated diff, then merge the pull request.
3. On a clean, up-to-date `master`, validate the complete release:

   ```bash
   ./tools/publish --dry-run 0.1.0
   ```

The publisher checks that all generated version sources agree, the worktree is
clean, the current commit is pushed, and the exact package version is not
already on npm. It then runs the complete test and package-install checks
before asking npm to simulate publication.

## Publish

Publish to production from `master`:

```bash
./tools/publish 0.1.0
```

The command verifies npm authentication and requires typing the exact package,
version, and distribution tag shown in its confirmation prompt. npm will
request a one-time password when the account or package requires it.

To use a granular token instead of an interactive npm login, read it without
displaying it or storing it in shell history:

```bash
read -s NPM_TOKEN
export NPM_TOKEN
./tools/publish 0.1.0
unset NPM_TOKEN
```

The publisher writes `NPM_TOKEN` only to a temporary, owner-readable npm
configuration and deletes that file when it exits.

Finally, verify that the exact release installs from npm in a clean directory:

```bash
mkdir -p .tmp/albus-sdk-verify
cd .tmp/albus-sdk-verify
npm init --yes
npm install @albus-ts/sdk@0.1.0
node --input-type=module -e \
  'import { Albus } from "@albus-ts/sdk"; console.log(typeof Albus)'
```

This local MVP workflow cannot create npm provenance attestations. Add trusted
publishing and provenance if release automation moves to GitHub Actions.

Fix a bad release with a new version. Do not try to replace or reuse a
published version.
