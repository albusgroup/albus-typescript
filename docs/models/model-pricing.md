# ModelPricing

What the model currently costs, as decimal USD strings per one million tokens (e.g. "1.25"). Absent when the model is not yet priced.


## Example Usage

```typescript
import { ModelPricing } from "@albus-ts/sdk/models";

let value: ModelPricing = {
  inputUsdPerMtok: "<value>",
  cachedInputUsdPerMtok: "<value>",
  outputUsdPerMtok: "<value>",
  thoughtsUsdPerMtok: "<value>",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `inputUsdPerMtok`                              | *string*                                       | :heavy_check_mark:                             | Price per million input tokens.                |
| `cachedInputUsdPerMtok`                        | *string*                                       | :heavy_check_mark:                             | Price per million cached input tokens.         |
| `outputUsdPerMtok`                             | *string*                                       | :heavy_check_mark:                             | Price per million output tokens.               |
| `thoughtsUsdPerMtok`                           | *string*                                       | :heavy_check_mark:                             | Price per million reasoning (thinking) tokens. |