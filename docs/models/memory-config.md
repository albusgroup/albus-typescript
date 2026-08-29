# MemoryConfig

Configures durable memory shared by invocations in the same group.


## Example Usage

```typescript
import { MemoryConfig } from "@albus-ts/sdk/models";

let value: MemoryConfig = {
  group: "<value>",
  generation: [],
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `group`                                        | *string*                                       | :heavy_check_mark:                             | Key identifying invocations that share memory. |
| `generation`                                   | [models.Generation](../models/generation.md)[] | :heavy_check_mark:                             | Points when this agent may generate memories.  |