# Invites

## Overview

### Available Operations

* [listInvites](#listinvites) - List pending invitations
* [createInvite](#createinvite) - Invite a user by email
* [revokeInvite](#revokeinvite) - Revoke a pending invitation

## listInvites

Lists the unexpired invitations into your organization. Requires the admin role.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listInvites" method="get" path="/organization/invites" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.invites.listInvites();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { invitesListInvites } from "@albus-ts/sdk/funcs/invites-list-invites.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await invitesListInvites(albus);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invitesListInvites failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListInvitesRequest](../../models/operations/list-invites-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ListInvitesResponse](../../models/list-invites-response.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrForbidden      | 403                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## createInvite

Invites an email address into your organization. The invitation is redeemed automatically the next time the invitee signs in with that email, and expires after 14 days. Requires the admin role.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="createInvite" method="post" path="/organization/invites" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.invites.createInvite({
    email: "Cassie27@hotmail.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { invitesCreateInvite } from "@albus-ts/sdk/funcs/invites-create-invite.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await invitesCreateInvite(albus, {
    email: "Cassie27@hotmail.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("invitesCreateInvite failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateInviteRequest](../../models/create-invite-request.md)                                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Invite](../../models/invite.md)\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrBadRequest     | 400                      | application/json         |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrForbidden      | 403                      | application/json         |
| errors.ErrConflict       | 409                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |

## revokeInvite

Requires the admin role.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="revokeInvite" method="delete" path="/organization/invites/{id}" -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  await albus.invites.revokeInvite({
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { AlbusCore } from "@albus-ts/sdk/core.js";
import { invitesRevokeInvite } from "@albus-ts/sdk/funcs/invites-revoke-invite.js";

// Use `AlbusCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const albus = new AlbusCore({
  xAlbusOrganization: "<value>",
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const res = await invitesRevokeInvite(albus, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("invitesRevokeInvite failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RevokeInviteRequest](../../models/operations/revoke-invite-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type               | Status Code              | Content Type             |
| ------------------------ | ------------------------ | ------------------------ |
| errors.ErrUnauthorized   | 401                      | application/json         |
| errors.ErrForbidden      | 403                      | application/json         |
| errors.ErrNotFound       | 404                      | application/json         |
| errors.AlbusDefaultError | 4XX, 5XX                 | \*/\*                    |