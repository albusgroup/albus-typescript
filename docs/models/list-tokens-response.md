# ListTokensResponse

## Example Usage

```typescript
import { ListTokensResponse } from "@albus/sdk/models";

let value: ListTokensResponse = {
  tokens: [
    {
      id: "<id>",
      name: "<value>",
      createdAt: new Date("2026-07-18T23:05:27.938Z"),
    },
  ],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `tokens`                             | [models.Token](../models/token.md)[] | :heavy_check_mark:                   | N/A                                  |