# SpendLine

## Example Usage

```typescript
import { SpendLine } from "@albus-ts/sdk/models";

let value: SpendLine = {
  day: new Date("2024-07-10T02:43:45.081Z"),
  kind: "hardware",
  usd: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `day`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The UTC midnight starting the day this line covers.                                           |
| `kind`                                                                                        | [models.SpendLineKind](../models/spend-line-kind.md)                                          | :heavy_check_mark:                                                                            | What was used: a model, or the compute an invocation ran on.<br/>                             |
| `providerName`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The provider that served the model. Present on model lines.<br/>                              |
| `modelName`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The model that was called. Present on model lines.                                            |
| `sku`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The compute item charged (e.g. "invocation_second"). Present on hardware lines.<br/>          |
| `usd`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | What this line cost, as a decimal USD string. Zero when the usage was free.<br/>              |
| `inputTokens`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Prompt tokens sent, including cached ones.                                                    |
| `cachedInputTokens`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | Prompt tokens served from the provider's cache.                                               |
| `outputTokens`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Tokens the model generated.                                                                   |
| `thoughtsTokens`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | Tokens the model spent reasoning.                                                             |
| `wallMs`                                                                                      | *number*                                                                                      | :heavy_minus_sign:                                                                            | Milliseconds of compute time charged.                                                         |