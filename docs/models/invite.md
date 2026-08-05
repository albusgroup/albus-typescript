# Invite

## Example Usage

```typescript
import { Invite } from "@albus-ts/sdk/models";

let value: Invite = {
  id: "<id>",
  email: "Neva10@gmail.com",
  role: "<value>",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Invitation identifier                                                                                        |
| `email`                                                                                                      | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Invited email address                                                                                        |
| `role`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | Role the invitee will be granted                                                                             |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | Organization the invitee will join. Absent when the invitation creates a new organization on first sign-in.<br/> |