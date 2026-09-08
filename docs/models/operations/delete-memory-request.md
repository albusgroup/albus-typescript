# DeleteMemoryRequest

## Example Usage

```typescript
import { DeleteMemoryRequest } from "@albus-ts/sdk/models/operations";

let value: DeleteMemoryRequest = {
  group: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `group`                                                               | *string*                                                              | :heavy_check_mark:                                                    | Memory group to read or delete, matching the agent's `memory.group`.<br/> |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | Identifier of the memory to delete.                                   |