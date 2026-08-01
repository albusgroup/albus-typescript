# SessionMessage

## Example Usage

```typescript
import { SessionMessage } from "@albus-ts/sdk/models";

let value: SessionMessage = {
  cursor: 329636,
  invocationId: "<id>",
  role: "assistant",
  content: "<value>",
  createdAt: new Date("2024-12-23T02:04:32.237Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `cursor`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Monotonic per-session position of this message.                                               |
| `invocationId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | The invocation that produced this message.                                                    |
| `role`                                                                                        | [models.Role](../models/role.md)                                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `content`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |