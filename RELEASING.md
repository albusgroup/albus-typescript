# Releasing the TypeScript SDK

Run everything below from `clients/albus-typescript/` in the Albus repository,
which is where the SDK is developed; the public `albus-typescript` repository
is a mirror written by the release.

A release is a maintainer running the scripts below from a clean, up-to-date
`master` checkout: they run `./tools/check`, upload to npm, push the released
tree to the public mirror as a single tagged commit, and close the mirror
issues the release fixes. Nothing publishes from CI, on push, on tag, or on
merge.

## One-time npm setup

1. Create an npm account, verify its email address, enable two-factor
   authentication, and save the recovery codes.
2. Create or join the `albus-ts` npm organization and confirm that the account
   may publish packages in the `@albus-ts` scope.
3. Log in from the release machine:

   ```bash
   npm login --registry=https://registry.npmjs.org/
   npm whoami --registry=https://registry.npmjs.org/
   ```

Interactive login with two-factor authentication is the preferred MVP setup.
The npm CLI stores and manages that login outside this repository.

As an alternative, create a granular access token with read/write access
limited to the `@albus-ts` scope. A token used for publishing must be allowed
to bypass two-factor authentication. Give it a short expiration and keep it in
a password manager.

Never put an npm credential in this repository, a command-line argument, shell
history, or a pull request.

The package is not published to JSR. `jsr.json` is generated and shipped in the
tarball, but no script authenticates to JSR or uploads there; publishing there
is a separate decision and would need its own guarded command.

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
   ./tools/generate 0.5.0
   ```

   The source is this repository's `api/openapi.yaml`.

2. Review the OpenAPI snapshot and generated diff, then merge the pull request.
   Give any commit that fixes a publicly reported bug a
   `Mirror-Issue: albusgroup/albus-typescript#<number>` trailer — that trailer
   is what closes the reporter's issue when the fix ships.
3. On a clean, up-to-date `master`, validate the complete release:

   ```bash
   ./tools/publish --dry-run 0.5.0
   ```

The publisher checks that all generated version sources agree, the worktree is
clean, the current commit is pushed, and the exact package version is not
already on npm. It then runs the complete test and package-install checks
before asking npm to simulate publication.

## Publish

Publish to production from `master`:

```bash
./tools/publish 0.5.0
```

The command verifies npm authentication and requires typing the exact package,
version, and distribution tag shown in its confirmation prompt. npm will
request a one-time password when the account or package requires it.

To use a granular token instead of an interactive npm login, read it without
displaying it or storing it in shell history:

```bash
read -s NPM_TOKEN
export NPM_TOKEN
./tools/publish 0.5.0
unset NPM_TOKEN
```

The publisher writes `NPM_TOKEN` only to a temporary, owner-readable npm
configuration and deletes that file when it exits.

Finally, verify that the exact release installs from npm in a clean directory:

```bash
mkdir -p .tmp/albus-sdk-verify
cd .tmp/albus-sdk-verify
npm init --yes
npm install @albus-ts/sdk@0.5.0
node --input-type=module -e \
  'import { Albus } from "@albus-ts/sdk"; console.log(typeof Albus)'
```

This local workflow cannot create npm provenance attestations, which require a
trusted publisher on a CI runner.

Published npm versions are immutable. Fix a bad release with a new version
rather than trying to replace or reuse a published one.

## The public mirror

`albusgroup/albus-typescript` is written by the release, never edited directly:

```bash
./tools/mirror-release --dry-run 0.5.0 /path/to/albus-typescript
./tools/mirror-release 0.5.0 /path/to/albus-typescript
```

The script replaces the mirror's tree with the tracked contents of
`clients/albus-typescript` (minus `AGENTS.md`), commits it as one commit
recording the released `Source-Commit`, tags it `v<version>`, pushes `master`
and the tag atomically, and then closes every `albusgroup/albus-typescript`
issue named by a `Mirror-Issue` trailer added since the previous release,
commenting with the published version.

It needs push access to the mirror and a `gh` login that can close its issues —
the same credentials a maintainer already has, since the release does not run
from CI. The credential must also carry the `workflow` scope: the mirrored tree
contains `.github/workflows/close-pull-requests.yml`, and a push touching a
workflow file is rejected without it.

The checkout you pass is only read: the release commit is built in a throwaway
clone of it, so a push rejected for a missing scope leaves nothing to unwind
and the command is simply run again. Pull the checkout afterwards to see the
release in it.

The first mirror release has no previous release commit to read a
`Source-Commit` trailer from, so it closes no issues and says so. Every release
after it derives its range from the commit the previous one recorded.
