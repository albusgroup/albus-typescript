# ListMemoryGroupsRequest

## Example Usage

```typescript
import { ListMemoryGroupsRequest } from "@albus-ts/sdk/models/operations";

let value: ListMemoryGroupsRequest = {};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `after`                                                                                                                             | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Opaque pagination cursor. Return only items positioned after it; pass a value obtained from a previous page to fetch the next one.<br/> |
| `limit`                                                                                                                             | *number*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Maximum number of items to return.                                                                                                  |