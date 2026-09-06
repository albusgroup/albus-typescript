# Sessions

## Overview

Run and inspect agent sessions.

### Available Operations

* [listSessions](#listsessions) - List sessions
* [getSession](#getsession) - Get a session with its messages
* [runSession](#runsession) - Run or resume a session
* [deleteSession](#deletesession) - Delete a session
* [cancelSession](#cancelsession) - Cancel a session's running invocation
* [getSessionAudit](#getsessionaudit) - List a session's audit log

## listSessions

Lists your organization's sessions, most recently used first. Filter by agent name, agent revision, invocation state, time window, or an invocation it ran: a session matches when any of its invocations does, and a filtered listing is ordered by each session's most recent matching invocation. A filter that matches nothing returns an empty page rather than an error.

Page with `after` and `limit`: pass the response's `next_cursor` as the next request's `after`, and keep requesting while `next_cursor` is present — you have reached the end when it is absent. A page can hold fewer sessions than `limit`, or none at all, and still have a `next_cursor`; a short page is not the end of the results.

A listing covers the window given by `since` and `until`, and omitting `since` searches the last 31 days. The window is fixed when the first page is requested, so paging with `after` keeps returning results from the window that page used: `after` carries that window and the filters it was made with, so send it with no filters, or with every filter repeated exactly, and expect a `400` otherwise.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSessions" method="get" path="/sessions" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.sessions.listSessions({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { sessionsListSessions } from "@albus-ts/sdk/funcs/sessions-list-sessions.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sessionsListSessions(albus, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sessionsListSessions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSessionsRequest](../../models/operations/list-sessions-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListSessionsResponse](../../models/list-sessions-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrBadRequest     | 400                      | application/json         |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## getSession

Returns the session's metadata and a page of its messages ordered by cursor ascending. Use `after` and `limit` to page through messages.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSession" method="get" path="/sessions/{id}" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.sessions.getSession({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { sessionsGetSession } from "@albus-ts/sdk/funcs/sessions-get-session.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sessionsGetSession(albus, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sessionsGetSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSessionRequest](../../models/operations/get-session-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SessionResponse](../../models/session-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrBadRequest     | 400                      | application/json         |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrNotFound       | 404                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## runSession

Runs the session with the given ID, creating it if it does not exist and resuming it otherwise. Each call is a single invocation, optionally named by the Idempotency-Key header, whose value is the invocation's key. Supplying a key makes the call safe to retry: retrying with the same key and an identical body re-attaches to the in-flight invocation and returns its current state; a differing body for the same key returns 409; a new key while another invocation is still running returns 423. Omitting the header starts a fresh, non-idempotent invocation each time; the server generates a key and returns it in the Idempotency-Key response header.

With `wait_timeout_seconds` the request long-polls: it blocks until the invocation's assistant response is available and returns it in `message`. Omit it to wait up to 30 minutes, or pass 0 to return as soon as the invocation is accepted. A positive value bounds the wait in seconds; if it elapses first the request fails with 504 and a JSON body, letting the client distinguish an expected server-side timeout from a transport error; the client may retry.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="runSession" method="post" path="/sessions/{id}" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.sessions.runSession({
    id: "<id>",
    body: {
      userPrompt: "<value>",
      agentName: "<value>",
      agent: {
        model: {
          name: "<value>",
        },
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { sessionsRunSession } from "@albus-ts/sdk/funcs/sessions-run-session.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sessionsRunSession(albus, {
    id: "<id>",
    body: {
      userPrompt: "<value>",
      agentName: "<value>",
      agent: {
        model: {
          name: "<value>",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sessionsRunSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RunSessionRequest](../../models/operations/run-session-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RunSessionResponse](../../models/operations/run-session-response.md)\>**

### Errors

| Error Type                   | Status Code                  | Content Type                 |
| ---------------------------- | ---------------------------- | ---------------------------- |
| errors.ErrBadRequest         | 400                          | application/json             |
| errors.ErrUnauthorized       | 401                          | application/json             |
| errors.ErrInsufficientCredit | 402                          | application/json             |
| errors.ErrConflict           | 409                          | application/json             |
| errors.ErrInvocationCanceled | 410                          | application/json             |
| errors.ErrLocked             | 423                          | application/json             |
| errors.ErrInvocationFailed   | 502                          | application/json             |
| errors.ErrTimeout            | 504                          | application/json             |
| errors.AlbusDefaultError     | 4XX, 5XX                     | \*/\*                        |

## deleteSession

Delete a session

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteSession" method="delete" path="/sessions/{id}" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  await albus.sessions.deleteSession({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { sessionsDeleteSession } from "@albus-ts/sdk/funcs/sessions-delete-session.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sessionsDeleteSession(albus, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;

  } else {
    console.log("sessionsDeleteSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSessionRequest](../../models/operations/delete-session-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrNotFound       | 404                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## cancelSession

Requests cancellation of the invocation currently running for the session. Cancellation is asynchronous: the call returns once the request is accepted, and the invocation resolves as canceled shortly after, unlocking the session for new invocations. A request waiting on the invocation receives its terminal outcome. Returns 409 when the session has no invocation running.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="cancelSession" method="post" path="/sessions/{id}/cancel" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.sessions.cancelSession({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { sessionsCancelSession } from "@albus-ts/sdk/funcs/sessions-cancel-session.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sessionsCancelSession(albus, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sessionsCancelSession failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelSessionRequest](../../models/operations/cancel-session-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CancelSessionResponse](../../models/cancel-session-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrNotFound       | 404                      | application/json         |
| errors.ErrConflict       | 409                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## getSessionAudit

Returns the session's audit log — an immutable, time-ordered record of what happened during its invocations (LLM calls, tool results, and invocation outcomes). Events are ordered by the time they occurred. Use `after` and `limit` to page through them; pass the response's `next_cursor` as the next request's `after` to fetch the following page.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSessionAudit" method="get" path="/sessions/{id}/audit" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.sessions.getSessionAudit({
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { sessionsGetSessionAudit } from "@albus-ts/sdk/funcs/sessions-get-session-audit.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await sessionsGetSessionAudit(albus, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sessionsGetSessionAudit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSessionAuditRequest](../../models/operations/get-session-audit-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListAuditEventsResponse](../../models/list-audit-events-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrBadRequest     | 400                      | application/json         |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrNotFound       | 404                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |
