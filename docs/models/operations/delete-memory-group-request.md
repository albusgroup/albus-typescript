# DeleteMemoryGroupRequest

## Example Usage

```typescript
import { DeleteMemoryGroupRequest } from "@albus-ts/sdk/models/operations";

let value: DeleteMemoryGroupRequest = {
  group: "<value>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `group`                                                               | *string*                                                              | :heavy_check_mark:                                                    | Memory group to read or delete, matching the agent's `memory.group`.<br/> |