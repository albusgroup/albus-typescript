# ListMemoriesRequest

## Example Usage

```typescript
import { ListMemoriesRequest } from "@albus-ts/sdk/models/operations";

let value: ListMemoriesRequest = {
  group: "<value>",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `group`                                                                                                                                                          | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | Memory group to read or delete, matching the agent's `memory.group`.<br/>                                                                                        |
| `after`                                                                                                                                                          | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Continue after this cursor. For list responses, pass the preceding page's `next_cursor`; for session messages, pass the preceding page's last message `cursor`.<br/> |
| `limit`                                                                                                                                                          | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Maximum number of items to return.                                                                                                                               |