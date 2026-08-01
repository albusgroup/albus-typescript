# AuditEvent

## Example Usage

```typescript
import { AuditEvent } from "@albus-ts/sdk/models";

let value: AuditEvent = {
  id: "<id>",
  sessionId: "<id>",
  invocationId: "<id>",
  type: "tool_result",
  payload: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  eventTime: new Date("2026-06-08T03:29:51.539Z"),
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                      | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Stable identifier of this audit event within the session.                                                                 |
| `sessionId`                                                                                                               | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The session this event belongs to.                                                                                        |
| `invocationId`                                                                                                            | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The invocation (run) during which this event occurred.                                                                    |
| `type`                                                                                                                    | [models.Type](../models/type.md)                                                                                          | :heavy_check_mark:                                                                                                        | The kind of event (e.g. "llm_call" for a model call and the tool calls it requested, "tool_result" for a tool's output).<br/> |
| `payload`                                                                                                                 | Record<string, *any*>                                                                                                     | :heavy_check_mark:                                                                                                        | The event's details, whose shape depends on `type` (e.g. the model content and requested tool calls for "llm_call").<br/> |
| `eventTime`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                             | :heavy_check_mark:                                                                                                        | When the event occurred.                                                                                                  |