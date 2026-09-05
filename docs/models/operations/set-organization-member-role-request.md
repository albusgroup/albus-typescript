# SetOrganizationMemberRoleRequest

## Example Usage

```typescript
import { SetOrganizationMemberRoleRequest } from "@albus-ts/sdk/models/operations";

let value: SetOrganizationMemberRoleRequest = {
  userId: "<id>",
  body: {
    role: "member",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `userId`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | The member's user identifier.                                                                   |
| `body`                                                                                          | [models.SetOrganizationMemberRoleRequest](../../models/set-organization-member-role-request.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |