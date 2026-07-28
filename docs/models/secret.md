# Secret

## Example Usage

```typescript
import { Secret } from "@albus/sdk/models";

let value: Secret = {
  name: "<value>",
  maskedValue: "<value>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `name`                                                      | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `maskedValue`                                               | *string*                                                    | :heavy_check_mark:                                          | The secret value with all but the last 3 characters masked. |