# SpendResponse

## Example Usage

```typescript
import { SpendResponse } from "@albus-ts/sdk/models";

let value: SpendResponse = {
  since: new Date("2025-09-12T17:12:23.025Z"),
  until: new Date("2025-05-19T06:35:07.093Z"),
  totalUsd: "<value>",
  lines: [
    {
      day: new Date("2024-01-17T07:49:31.657Z"),
      kind: "hardware",
      usd: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `since`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The UTC midnight the lines start from, after widening `since` to a whole day.<br/>            |
| `until`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The UTC midnight the lines stop before, after widening `until` to a whole day.<br/>           |
| `totalUsd`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | The sum of every line, as a decimal USD string.                                               |
| `lines`                                                                                       | [models.SpendLine](../models/spend-line.md)[]                                                 | :heavy_check_mark:                                                                            | Ordered by day, then kind, provider, model, and sku.                                          |