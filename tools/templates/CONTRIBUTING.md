# Contributing to albus-typescript

Thanks for helping improve the Albus TypeScript SDK.

## Report a problem

Open a GitHub issue with:

- The installed `@albus/sdk`, JavaScript runtime, and TypeScript versions.
- A minimal example that reproduces the problem.
- The expected and actual behavior.
- The exception type, response status, and sanitized logs when relevant.

Do not include access tokens, organization keys, secret values, or other
sensitive data.

Report suspected vulnerabilities privately to the maintainers, not by opening
a public issue.

## Generated-code ownership

The API contract is maintained in the private Albus repository at
`api/openapi.yaml`. Speakeasy generates the SDK implementation, model and
endpoint documentation, package metadata, and generation lock files from that
contract.

Changes made directly to generated files under `src/` or `docs/` will be
overwritten. Pull requests should normally change one of these instead:

- The authoritative OpenAPI specification, for API behavior or documentation.
- `.speakeasy/gen.yaml`, for generator behavior.
- `tools/`, `tests/`, or handwritten README sections, for this repository's
  generation workflow, checks, and usage guidance.

Maintainers regenerate with:

```bash
./tools/generate /path/to/albus/api/openapi.yaml 0.1.0
```

The specification snapshot, generated output, documentation, package metadata,
and lock files must be reviewed and committed together.
