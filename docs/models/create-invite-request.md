# CreateInviteRequest

## Example Usage

```typescript
import { CreateInviteRequest } from "@albus-ts/sdk/models";

let value: CreateInviteRequest = {
  email: "August_Hane52@hotmail.com",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `email`                                                                   | *string*                                                                  | :heavy_check_mark:                                                        | Email address of the person to invite.                                    |
| `role`                                                                    | [models.CreateInviteRequestRole](../models/create-invite-request-role.md) | :heavy_minus_sign:                                                        | Role to grant the invitee.                                                |