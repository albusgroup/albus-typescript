# CancelSessionRequest

## Example Usage

```typescript
import { CancelSessionRequest } from "@albus-ts/sdk/models/operations";

let value: CancelSessionRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | Client-provided session identifier. Use the same value across requests to continue the same agent session. |