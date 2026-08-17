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

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `cursor`                                                                                                  | *number*                                                                                                  | :heavy_check_mark:                                                                                        | Position of this message in the session's history, ascending — not an index into the list it arrives in.<br/> |
| `invocationId`                                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The invocation that produced this message.                                                                |
| `role`                                                                                                    | [models.SessionMessageRole](../models/session-message-role.md)                                            | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `content`                                                                                                 | *string*                                                                                                  | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `createdAt`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |