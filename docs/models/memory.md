# Memory

## Example Usage

```typescript
import { Memory } from "@albus-ts/sdk/models";

let value: Memory = {
  id: "<id>",
  content: "<value>",
  status: "active",
  createdAt: new Date("2026-03-01T20:04:38.794Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of this memory; pass it to `DELETE /memorygroups/{group}/memories/{id}`.<br/>      |
| `content`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | The fact remembered, as the agent stated it.                                                  |
| `status`                                                                                      | [models.MemoryStatus](../models/memory-status.md)                                             | :heavy_check_mark:                                                                            | Always `active`; only memories agents read are listed.                                        |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the memory was remembered.                                                               |
| `sourceSession`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | Customer-provided session identifier that produced the memory.<br/>                           |
| `sourceInvocation`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | Invocation identifier that produced the memory.                                               |