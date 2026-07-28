# Provider

## Example Usage

```typescript
import { Provider } from "@albus/sdk/models";

let value: Provider = {
  name: "<value>",
  credential: "<value>",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                      | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Provider name (e.g. "openai", "gemini", "vertex").                                                          |
| `url`                                                                                                       | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | Optional base URL override for the provider endpoint.                                                       |
| `credential`                                                                                                | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Secret reference the provider authenticates with (e.g. "albus.sh/secrets/my-key"), not a raw secret value.<br/> |