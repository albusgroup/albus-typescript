# Model

## Example Usage

```typescript
import { Model } from "@albus/sdk/models";

let value: Model = {
  name: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | Model identifier (e.g. "gemini-2.5-flash", "claude-opus-4"). |
| `provider`                                                   | [models.Provider](../models/provider.md)                     | :heavy_minus_sign:                                           | N/A                                                          |