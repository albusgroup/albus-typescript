# DeleteMemoryGroupRequest

## Example Usage

```typescript
import { DeleteMemoryGroupRequest } from "@albus-ts/sdk/models/operations";

let value: DeleteMemoryGroupRequest = {
  group: "<value>",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `group`                                                                                                    | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The memory group to read or delete — the `memory.group` value the agents sharing those memories run with.<br/> |