# ListMemoryGroupsResponse

## Example Usage

```typescript
import { ListMemoryGroupsResponse } from "@albus-ts/sdk/models";

let value: ListMemoryGroupsResponse = {
  memoryGroups: [
    {
      key: "<key>",
      activeMemories: 487624,
      createdAt: new Date("2024-05-21T19:53:21.025Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `memoryGroups`                                                                                                      | [models.MemoryGroup](../models/memory-group.md)[]                                                                   | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `nextCursor`                                                                                                        | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Cursor for the next page. Pass it as `after` to fetch the following groups. Omitted when there are no more groups.<br/> |