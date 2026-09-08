# DeleteSessionRequest

## Example Usage

```typescript
import { DeleteSessionRequest } from "@albus-ts/sdk/models/operations";

let value: DeleteSessionRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `id`                                                                   | *string*                                                               | :heavy_check_mark:                                                     | Client-provided session identifier. Reuse it to continue the session.<br/> |