# DeleteMemoryRequest

## Example Usage

```typescript
import { DeleteMemoryRequest } from "@albus-ts/sdk/models/operations";

let value: DeleteMemoryRequest = {
  id: "<id>",
  group: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                       | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The memory's identifier, as returned by `GET /memories`.                                                   |
| `group`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The memory group to read or delete — the `memory.group` value the agents sharing those memories run with.<br/> |