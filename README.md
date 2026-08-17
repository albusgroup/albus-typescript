# @albus-ts/sdk

Official, type-safe TypeScript SDK for the Albus API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=@albus-ts/sdk&utm_campaign=typescript)
[![License: MIT](https://img.shields.io/badge/LICENSE_//_MIT-3b5bdb?style=for-the-badge&labelColor=eff6ff)](https://opensource.org/licenses/MIT)

## Quickstart

Install the SDK from npm:

```bash
npm install @albus-ts/sdk
```

Session operations use an organization API key:

```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  security: {
    apiKey: process.env.ALBUS_API_KEY ?? "",
  },
});

const response = await albus.sessions.listSessions();
console.log(response.sessions);
```

User and token operations use a user bearer token. Secret operations accept
either credential. Production requests use `https://albus.sh/api` by default.

<!-- Start Summary [summary] -->
## Summary

Albus API: Albus service REST API
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@albus-ts/sdk](#albus-tssdk)
  * [Quickstart](#quickstart)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Regeneration](#regeneration)
  * [Checks](#checks)
  * [Releases](#releases)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @albus-ts/sdk
```

### PNPM

```bash
pnpm add @albus-ts/sdk
```

### Bun

```bash
bun add @albus-ts/sdk
```

### Yarn

```bash
yarn add @albus-ts/sdk
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import()` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.secrets.listSecrets();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name         | Type | Scheme      | Environment Variable |
| ------------ | ---- | ----------- | -------------------- |
| `bearerAuth` | http | HTTP Bearer | `ALBUS_BEARER_AUTH`  |
| `apiKey`     | http | HTTP Bearer | `ALBUS_API_KEY`      |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.secrets.listSecrets();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Agents](docs/sdks/agents/README.md)

* [listAgents](docs/sdks/agents/README.md#listagents) - List agents
* [getAgent](docs/sdks/agents/README.md#getagent) - Get an agent by name
* [getAgentRevision](docs/sdks/agents/README.md#getagentrevision) - Get a specific revision of an agent

### [Auth](docs/sdks/auth/README.md)

* [whoami](docs/sdks/auth/README.md#whoami) - Get the authenticated caller

### [Health](docs/sdks/health/README.md)

* [health](docs/sdks/health/README.md#health) - Health check endpoint

### [Invites](docs/sdks/invites/README.md)

* [createInvite](docs/sdks/invites/README.md#createinvite) - Invite a user by email

### [Models](docs/sdks/models/README.md)

* [listModels](docs/sdks/models/README.md#listmodels) - List models

### [Secrets](docs/sdks/secrets/README.md)

* [listSecrets](docs/sdks/secrets/README.md#listsecrets) - List all secrets
* [createSecret](docs/sdks/secrets/README.md#createsecret) - Create a secret
* [getSecret](docs/sdks/secrets/README.md#getsecret) - Get a secret by name
* [updateSecret](docs/sdks/secrets/README.md#updatesecret) - Update a secret by name
* [deleteSecret](docs/sdks/secrets/README.md#deletesecret) - Delete a secret by name

### [Sessions](docs/sdks/sessions/README.md)

* [listSessions](docs/sdks/sessions/README.md#listsessions) - List all sessions
* [getSession](docs/sdks/sessions/README.md#getsession) - Get a session with its messages
* [runSession](docs/sdks/sessions/README.md#runsession) - Run or resume a session
* [deleteSession](docs/sdks/sessions/README.md#deletesession) - Delete a session
* [getSessionAudit](docs/sdks/sessions/README.md#getsessionaudit) - List a session's audit log

### [Tokens](docs/sdks/tokens/README.md)

* [listTokens](docs/sdks/tokens/README.md#listtokens) - List all API tokens. Never returns token values, only metadata.
* [createToken](docs/sdks/tokens/README.md#createtoken) - Create an API token. The token value is returned only in this response.
* [getToken](docs/sdks/tokens/README.md#gettoken) - Get token metadata by ID. Never returns the token value.
* [deleteToken](docs/sdks/tokens/README.md#deletetoken) - Revoke an API token by ID

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`agentsGetAgent`](docs/sdks/agents/README.md#getagent) - Get an agent by name
- [`agentsGetAgentRevision`](docs/sdks/agents/README.md#getagentrevision) - Get a specific revision of an agent
- [`agentsListAgents`](docs/sdks/agents/README.md#listagents) - List agents
- [`authWhoami`](docs/sdks/auth/README.md#whoami) - Get the authenticated caller
- [`healthHealth`](docs/sdks/health/README.md#health) - Health check endpoint
- [`invitesCreateInvite`](docs/sdks/invites/README.md#createinvite) - Invite a user by email
- [`modelsListModels`](docs/sdks/models/README.md#listmodels) - List models
- [`secretsCreateSecret`](docs/sdks/secrets/README.md#createsecret) - Create a secret
- [`secretsDeleteSecret`](docs/sdks/secrets/README.md#deletesecret) - Delete a secret by name
- [`secretsGetSecret`](docs/sdks/secrets/README.md#getsecret) - Get a secret by name
- [`secretsListSecrets`](docs/sdks/secrets/README.md#listsecrets) - List all secrets
- [`secretsUpdateSecret`](docs/sdks/secrets/README.md#updatesecret) - Update a secret by name
- [`sessionsDeleteSession`](docs/sdks/sessions/README.md#deletesession) - Delete a session
- [`sessionsGetSession`](docs/sdks/sessions/README.md#getsession) - Get a session with its messages
- [`sessionsGetSessionAudit`](docs/sdks/sessions/README.md#getsessionaudit) - List a session's audit log
- [`sessionsListSessions`](docs/sdks/sessions/README.md#listsessions) - List all sessions
- [`sessionsRunSession`](docs/sdks/sessions/README.md#runsession) - Run or resume a session
- [`tokensCreateToken`](docs/sdks/tokens/README.md#createtoken) - Create an API token. The token value is returned only in this response.
- [`tokensDeleteToken`](docs/sdks/tokens/README.md#deletetoken) - Revoke an API token by ID
- [`tokensGetToken`](docs/sdks/tokens/README.md#gettoken) - Get token metadata by ID. Never returns the token value.
- [`tokensListTokens`](docs/sdks/tokens/README.md#listtokens) - List all API tokens. Never returns token values, only metadata.

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.secrets.listSecrets({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.secrets.listSecrets();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`AlbusError`](./src/models/errors/albus-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Albus } from "@albus-ts/sdk";
import * as errors from "@albus-ts/sdk/models/errors";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  try {
    const result = await albus.secrets.listSecrets();

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.AlbusError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrUnauthorized) {
        console.log(error.data$.message); // string
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`AlbusError`](./src/models/errors/albus-error.ts): The base class for HTTP error responses.
  * [`ErrUnauthorized`](./src/models/errors/err-unauthorized.ts): Status code `401`. *

<details><summary>Less common errors (14)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`AlbusError`](./src/models/errors/albus-error.ts)**:
* [`ErrNotFound`](./src/models/errors/err-not-found.ts): Not found. Status code `404`. Applicable to 10 of 21 methods.*
* [`ErrBadRequest`](./src/models/errors/err-bad-request.ts): Status code `400`. Applicable to 6 of 21 methods.*
* [`ErrConflict`](./src/models/errors/err-conflict.ts): Status code `409`. Applicable to 2 of 21 methods.*
* [`ErrLocked`](./src/models/errors/err-locked.ts): Another invocation is currently running for this session. Status code `423`. Applicable to 1 of 21 methods.*
* [`ErrQuotaExceeded`](./src/models/errors/err-quota-exceeded.ts): The organization has reached its invocation quota. Status code `429`. Applicable to 1 of 21 methods.*
* [`ErrRunFailed`](./src/models/errors/err-run-failed.ts): The harness run failed instead of producing a response (only possible while waiting for a response, or when replaying a failed invocation). The body carries the failure kind and detail. Status code `502`. Applicable to 1 of 21 methods.*
* [`HealthResponseError`](./src/models/errors/health-response-error.ts): Service is healthy. Status code `503`. Applicable to 1 of 21 methods.*
* [`ErrTimeout`](./src/models/errors/err-timeout.ts): Timed out waiting for the assistant response. Status code `504`. Applicable to 1 of 21 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                  | Description              |
| --- | ----------------------- | ------------------------ |
| 0   | `https://albus.sh/api`  | Production server        |
| 1   | `http://localhost:8080` | Local development server |

#### Example

```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  serverIdx: 0,
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.secrets.listSecrets();

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  serverURL: "http://localhost:8080",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.secrets.listSecrets();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { Albus } from "@albus-ts/sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@albus-ts/sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Albus({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Albus } from "@albus-ts/sdk";

const sdk = new Albus({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `ALBUS_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Regeneration

Regeneration requires Node, Speakeasy authentication, and the Speakeasy CLI
version pinned in `.speakeasy/workflow.yaml`.

Run the generator with the SDK version to produce:

```bash
./tools/generate 0.1.0
```

The source is the authoritative `api/openapi.yaml` in the Albus repository,
where this SDK is developed; pass a path as a second argument only to preview
against a different specification.

Review and commit the OpenAPI snapshot, generated source, documentation,
package metadata, and Speakeasy lock files together.

## Checks

Run the complete local validation:

```bash
./tools/check
```

The check lints the OpenAPI document and TypeScript source, builds and tests the
SDK, audits production dependencies, validates the npm tarball contents, and
installs the packed SDK in an isolated project. A machine without the pinned
Speakeasy CLI runs `./tools/check --without-speakeasy`, which skips the
specification lint.

## Releases

Publishing is manual. Follow [RELEASING.md](RELEASING.md) to validate and
publish a generated version with the guarded local scripts.

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@albus-ts/sdk&utm_campaign=typescript)
