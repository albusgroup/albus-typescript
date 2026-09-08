# GetSessionAuditRequest

## Example Usage

```typescript
import { GetSessionAuditRequest } from "@albus-ts/sdk/models/operations";

let value: GetSessionAuditRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                             | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | Client-provided session identifier. Reuse it to continue the session.<br/>                                                                                       |
| `after`                                                                                                                                                          | *string*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Continue after this cursor. For list responses, pass the preceding page's `next_cursor`; for session messages, pass the preceding page's last message `cursor`.<br/> |
| `limit`                                                                                                                                                          | *number*                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                               | Maximum number of items to return.                                                                                                                               |