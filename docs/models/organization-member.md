# OrganizationMember

## Example Usage

```typescript
import { OrganizationMember } from "@albus-ts/sdk/models";

let value: OrganizationMember = {
  userId: "42",
  email: "Noel_Wuckert@hotmail.com",
  name: "<value>",
  role: "admin",
  joinedAt: new Date("2026-09-30T18:19:22.116Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | User identifier                                                                               | 42                                                                                            |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Email address                                                                                 |                                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Display name                                                                                  |                                                                                               |
| `role`                                                                                        | [models.Role](../models/role.md)                                                              | :heavy_check_mark:                                                                            | A member's role in an organization.                                                           |                                                                                               |
| `joinedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the user joined the organization.                                                        |                                                                                               |