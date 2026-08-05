# CreateInviteRequest

## Example Usage

```typescript
import { CreateInviteRequest } from "@albus-ts/sdk/models";

let value: CreateInviteRequest = {
  email: "August_Hane52@hotmail.com",
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `email`                                                                                                                          | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Email address of the person to invite.                                                                                           |
| `role`                                                                                                                           | [models.CreateInviteRequestRole](../models/create-invite-request-role.md)                                                        | :heavy_minus_sign:                                                                                                               | Role to grant the invitee. Defaults to admin when inviting to a new organization and member when inviting into an existing one.<br/> |
| `organizationId`                                                                                                                 | *string*                                                                                                                         | :heavy_minus_sign:                                                                                                               | Organization to invite the user into (e.g. "42"). Omit to create a new organization for the user on their first sign-in.<br/>    |