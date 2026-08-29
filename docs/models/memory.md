# Memory

## Example Usage

```typescript
import { Memory } from "@albus-ts/sdk/models";

let value: Memory = {
  id: "<id>",
  content: "<value>",
  status: "invalidated",
  createdAt: new Date("2026-01-01T20:12:20.166Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of this memory; pass it to `DELETE /memories/{id}`.<br/>                           |
| `content`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The fact remembered, as the agent stated it.                                                  |
| `status`                                                                                      | [models.MemoryStatus](../models/memory-status.md)                                             | :heavy_check_mark:                                                                            | `active` while agents read this memory, `invalidated` once a later memory replaced it.<br/>   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the memory was remembered.                                                               |
| `sourceSession`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Customer-provided session identifier that produced the memory.<br/>                           |
| `sourceInvocation`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Invocation identifier that produced the memory.                                               |