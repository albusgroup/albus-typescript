# OrganizationMembership

## Example Usage

```typescript
import { OrganizationMembership } from "@albus-ts/sdk/models";

let value: OrganizationMembership = {
  id: "42",
  name: "Acme Corp",
  roles: [
    "admin",
  ],
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `id`                                      | *string*                                  | :heavy_check_mark:                        | Organization identifier                   | 42                                        |
| `name`                                    | *string*                                  | :heavy_check_mark:                        | Organization display name                 | Acme Corp                                 |
| `roles`                                   | *string*[]                                | :heavy_check_mark:                        | Roles the user holds in this organization | [<br/>"admin"<br/>]                       |