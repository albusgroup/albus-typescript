# DeleteSessionRequest

## Example Usage

```typescript
import { DeleteSessionRequest } from "@albus/sdk/models/operations";

let value: DeleteSessionRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Client-provided session identifier. Use the same value across requests to continue the same agent session. |