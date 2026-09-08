# ListMemoryGroupsRequest

## Example Usage

```typescript
import { ListMemoryGroupsRequest } from "@albus-ts/sdk/models/operations";

let value: ListMemoryGroupsRequest = {};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`                                                                                                                                                          | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Continue after this cursor. For list responses, pass the preceding page's `next_cursor`; for session messages, pass the preceding page's last message `cursor`.<br/> |
| `limit`                                                                                                                                                          | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Maximum number of items to return.                                                                                                                               |