# Invite

## Example Usage

```typescript
import { Invite } from "@albus-ts/sdk/models";

let value: Invite = {
  id: "<id>",
  email: "Neva10@gmail.com",
  role: "<value>",
  expiresAt: new Date("2024-10-20T02:01:45.370Z"),
  createdAt: new Date("2025-07-05T19:59:00.966Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Invitation identifier                                                                         |
| `email`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | Invited email address                                                                         |
| `role`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Role the invitee will be granted                                                              |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the invitation stops being redeemable                                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the invitation was created                                                               |