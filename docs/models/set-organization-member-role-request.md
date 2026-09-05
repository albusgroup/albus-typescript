# SetOrganizationMemberRoleRequest

## Example Usage

```typescript
import { SetOrganizationMemberRoleRequest } from "@albus-ts/sdk/models";

let value: SetOrganizationMemberRoleRequest = {
  role: "member",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `role`                              | [models.Role](../models/role.md)    | :heavy_check_mark:                  | A member's role in an organization. |