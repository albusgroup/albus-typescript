# ListMemoriesRequest

## Example Usage

```typescript
import { ListMemoriesRequest } from "@albus-ts/sdk/models/operations";

let value: ListMemoriesRequest = {
  group: "<value>",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `group`                                                                                                                             | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | The memory group to read or delete — the `memory.group` value the agents sharing those memories run with.<br/>                      |
| `after`                                                                                                                             | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Opaque pagination cursor. Return only items positioned after it; pass a value obtained from a previous page to fetch the next one.<br/> |
| `limit`                                                                                                                             | *number*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Maximum number of items to return.                                                                                                  |