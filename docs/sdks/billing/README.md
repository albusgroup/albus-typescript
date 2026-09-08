# Billing

## Overview

Buy the prepaid credits agent sessions run on.

### Available Operations

* [createCheckout](#createcheckout) - Buy prepaid credits
* [getCreditBalance](#getcreditbalance) - Read your credit balance
* [listCreditLedger](#listcreditledger) - List your credit history

## createCheckout

Creates a purchase and returns its payment URL. Credits are added when payment completes.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCheckout" method="post" path="/billing/checkout" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  apiKey: process.env["ALBUS_API_KEY"] ?? "",
});

async function run() {
  const result = await albus.billing.createCheckout({
    amountUsd: 421255,
    successUrl: "https://flimsy-apricot.com/",
    cancelUrl: "https://silent-formamide.name",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { billingCreateCheckout } from "@albus-ts/sdk/funcs/billing-create-checkout.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  apiKey: process.env["ALBUS_API_KEY"] ?? "",
});

async function run() {
  const res = await billingCreateCheckout(albus, {
    amountUsd: 421255,
    successUrl: "https://flimsy-apricot.com/",
    cancelUrl: "https://silent-formamide.name",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingCreateCheckout failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateCheckoutRequest](../../models/create-checkout-request.md)                                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CreateCheckoutResponse](../../models/create-checkout-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrBadRequest     | 400                      | application/json         |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrUnavailable    | 503                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## getCreditBalance

Returns your organization's current prepaid credit balance in USD.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCreditBalance" method="get" path="/billing/balance" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  apiKey: process.env["ALBUS_API_KEY"] ?? "",
});

async function run() {
  const result = await albus.billing.getCreditBalance();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { billingGetCreditBalance } from "@albus-ts/sdk/funcs/billing-get-credit-balance.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  apiKey: process.env["ALBUS_API_KEY"] ?? "",
});

async function run() {
  const res = await billingGetCreditBalance(albus);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingGetCreditBalance failed:", res.error);
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

**Promise\<[models.CreditBalanceResponse](../../models/credit-balance-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrBadRequest     | 400                      | application/json         |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## listCreditLedger

Returns purchases, grants, usage charges, and adjustments newest first, with the signed USD amount of each balance change.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCreditLedger" method="get" path="/billing/ledger" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  apiKey: process.env["ALBUS_API_KEY"] ?? "",
});

async function run() {
  const result = await albus.billing.listCreditLedger({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { billingListCreditLedger } from "@albus-ts/sdk/funcs/billing-list-credit-ledger.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  apiKey: process.env["ALBUS_API_KEY"] ?? "",
});

async function run() {
  const res = await billingListCreditLedger(albus, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("billingListCreditLedger failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCreditLedgerRequest](../../models/operations/list-credit-ledger-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListCreditLedgerResponse](../../models/list-credit-ledger-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrBadRequest     | 400                      | application/json         |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |