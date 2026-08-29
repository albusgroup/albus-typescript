# Traces

## Overview

Find your agent invocations and read what they did.

### Available Operations

* [listTraces](#listtraces) - Search traces
* [getTrace](#gettrace) - Get one invocation's trace

## listTraces

Lists your organization's agent invocations, newest first, without their spans. Filter by agent name, agent revision, status, session, or start time to find the invocation you want, then read it with `GET /traces/{invocation_key}`. An invocation is listed as soon as it starts, and a filter that matches nothing returns an empty page rather than an error — except `session_id`, which is a `404` when your organization has no such session.

Page with `after` and `limit`: pass the response's `next_cursor` as the next request's `after`, and keep requesting while `next_cursor` is present — you have reached the end when it is absent. A page can hold fewer invocations than `limit`, or none at all, and still have a `next_cursor`; a short page is not the end of the results.

A listing covers the window given by `since` and `until`, and omitting `since` searches the last 31 days. The window is fixed when the first page is requested, so paging with `after` keeps returning results from the window that page used: `after` carries that window and the filters it was made with, so send it with no filters, or with every filter repeated exactly, and expect a `400` otherwise.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTraces" method="get" path="/traces" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.traces.listTraces({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { tracesListTraces } from "@albus-ts/sdk/funcs/traces-list-traces.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tracesListTraces(albus, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tracesListTraces failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTracesRequest](../../models/operations/list-traces-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListTracesResponse](../../models/list-traces-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrBadRequest     | 400                      | application/json         |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrNotFound       | 404                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## getTrace

Returns one agent invocation and a page of its spans in chronological order — the model calls it made and the tool calls they requested, with their payloads.

Page with `after` and `limit`: pass the response's `next_cursor` as the next request's `after`, and keep requesting while `next_cursor` is present — you have reached the end when it is absent. A page can hold fewer spans than `limit`, or none at all, and still have a `next_cursor`; a short page is not the end of the spans.

An invocation that was retried has more than one attempt, and by default only the spans of the latest attempt come back — the one that produced its outcome, or the one still in flight: the attempts before it are hidden, so a retried invocation reads as one history. They are hidden, not absent — every attempt ran, spent tokens, and may have made tool calls whose effects stand — so `attempts` lists all of them with their own outcomes and token usage, and `attempts=all` returns their spans too, each marked `superseded`.

A span becomes readable seconds after it happens, so an invocation still in flight can return fewer spans than it has already taken. A payload can come back shortened, or left out when it is too large — `input` and `output` say when, and `*_bytes`, `*_sha256` and `*_truncated` describe the complete value where the span carries them. Reading the shape of an invocation without its payloads is a request with `payloads=false`: the same spans with their timings, statuses and token usage, and `limit` up to 500, so a whole trace usually fits in one request. Spans age out after a retention window: past it `spans_expired` is true and no spans come back, while the invocation itself stays readable.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getTrace" method="get" path="/traces/{invocation_key}" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.traces.getTrace({
    invocationKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { tracesGetTrace } from "@albus-ts/sdk/funcs/traces-get-trace.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tracesGetTrace(albus, {
    invocationKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tracesGetTrace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTraceRequest](../../models/operations/get-trace-request.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTraceResponse](../../models/operations/get-trace-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrBadRequest     | 400                      | application/json         |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrNotFound       | 404                      | application/json         |
| errors.ErrUnavailable    | 503                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |