# WhoamiResponse

## Example Usage

```typescript
import { WhoamiResponse } from "@albus-ts/sdk/models";

let value: WhoamiResponse = {
  userId: "user_123",
  email: "user@example.com",
  name: "John Doe",
  roles: [
    "admin",
    "user",
  ],
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `userId`                                | *string*                                | :heavy_check_mark:                      | Unique user identifier                  | user_123                                |
| `email`                                 | *string*                                | :heavy_check_mark:                      | User's email address                    | user@example.com                        |
| `name`                                  | *string*                                | :heavy_minus_sign:                      | User's display name                     | John Doe                                |
| `roles`                                 | *string*[]                              | :heavy_minus_sign:                      | User's roles                            | [<br/>"admin",<br/>"user"<br/>]         |
| `issuedAt`                              | *number*                                | :heavy_minus_sign:                      | Token issue timestamp (Unix epoch)      |                                         |
| `expiresAt`                             | *number*                                | :heavy_minus_sign:                      | Token expiration timestamp (Unix epoch) |                                         |