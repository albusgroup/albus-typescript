# Tokens

## Overview

Manage organization API keys.

### Available Operations

* [listTokens](#listtokens) - List all API tokens. Never returns token values, only metadata.
* [createToken](#createtoken) - Create an API token. The token value is returned only in this response.
* [getToken](#gettoken) - Get token metadata by ID. Never returns the token value.
* [deleteToken](#deletetoken) - Revoke an API token by ID

## listTokens

List all API tokens. Never returns token values, only metadata.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTokens" method="get" path="/tokens" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.tokens.listTokens();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { tokensListTokens } from "@albus-ts/sdk/funcs/tokens-list-tokens.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tokensListTokens(albus);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tokensListTokens failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListTokensResponse](../../models/list-tokens-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## createToken

Create an API token. The token value is returned only in this response.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createToken" method="post" path="/tokens" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.tokens.createToken({
    name: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { tokensCreateToken } from "@albus-ts/sdk/funcs/tokens-create-token.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tokensCreateToken(albus, {
    name: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tokensCreateToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateTokenRequest](../../models/create-token-request.md)                                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateTokenResponse](../../models/create-token-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## getToken

Get token metadata by ID. Never returns the token value.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getToken" method="get" path="/tokens/{id}" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.tokens.getToken({
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
import { tokensGetToken } from "@albus-ts/sdk/funcs/tokens-get-token.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tokensGetToken(albus, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("tokensGetToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTokenRequest](../../models/operations/get-token-request.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Token](../../models/token.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrNotFound       | 404                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## deleteToken

Revoke an API token by ID

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteToken" method="delete" path="/tokens/{id}" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  await albus.tokens.deleteToken({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { tokensDeleteToken } from "@albus-ts/sdk/funcs/tokens-delete-token.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await tokensDeleteToken(albus, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;

  } else {
    console.log("tokensDeleteToken failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteTokenRequest](../../models/operations/delete-token-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
