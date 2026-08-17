# WhoamiResponse

The caller a credential authenticates. Exactly one of user or api_key is present.


## Example Usage

```typescript
import { WhoamiResponse } from "@albus-ts/sdk/models";

let value: WhoamiResponse = {
  user: {
    userId: "user_123",
    email: "user@example.com",
    name: "John Doe",
    roles: [
      "admin",
    ],
    activeOrganization: {
      id: "42",
      name: "Acme Corp",
      roles: [
        "admin",
      ],
    },
    organizations: [
      {
        id: "42",
        name: "Acme Corp",
        roles: [
          "admin",
        ],
      },
    ],
  },
  apiKey: {
    name: "<value>",
    organizationId: "42",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `user`                                                           | [models.AuthenticatedUser](../models/authenticated-user.md)      | :heavy_minus_sign:                                               | The signed-in user, when calling with a user session.            |
| `apiKey`                                                         | [models.AuthenticatedApiKey](../models/authenticated-api-key.md) | :heavy_minus_sign:                                               | The API key, when calling with an API key.                       |