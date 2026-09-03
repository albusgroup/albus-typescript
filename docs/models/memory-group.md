# MemoryGroup

## Example Usage

```typescript
import { MemoryGroup } from "@albus-ts/sdk/models";

let value: MemoryGroup = {
  key: "<key>",
  activeMemories: 167906,
  createdAt: new Date("2024-08-17T09:49:51.373Z"),
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `key`                                                                                                                                | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The group's name — the `memory.group` value agents sharing its memories run with. Read its memories at `GET /memorygroups/{group}`.<br/> |
| `activeMemories`                                                                                                                     | *number*                                                                                                                             | :heavy_check_mark:                                                                                                                   | Number of memories agents in the group currently read.                                                                               |
| `createdAt`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_check_mark:                                                                                                                   | When an agent first ran with this group.                                                                                             |