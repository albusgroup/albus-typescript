# ModelMeta

A model Albus can run, and the provider serving it.

## Example Usage

```typescript
import { ModelMeta } from "@albus-ts/sdk/models";

let value: ModelMeta = {
  name: "<value>",
  provider: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Model identifier to send as the agent's model name (e.g. "gemini-3.6-flash").<br/>                                                     |
| `provider`                                                                                                                             | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | Provider serving this model (e.g. "google_agent_studio", or "open_weight" for open-weight models).<br/>                                |
| `pricing`                                                                                                                              | [models.ModelPricing](../models/model-pricing.md)                                                                                      | :heavy_minus_sign:                                                                                                                     | What the model currently costs, as decimal USD strings per one million tokens (e.g. "1.25"). Absent when the model is not yet priced.<br/> |