# GetSessionRequest

## Example Usage

```typescript
import { GetSessionRequest } from "@albus/sdk/models/operations";

let value: GetSessionRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Client-provided session identifier. Use the same value across requests to continue the same agent session.                          |
| `after`                                                                                                                             | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Opaque pagination cursor. Return only items positioned after it; pass a value obtained from a previous page to fetch the next one.<br/> |
| `limit`                                                                                                                             | *number*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Maximum number of items to return.                                                                                                  |