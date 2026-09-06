# CreditBalanceResponse

## Example Usage

```typescript
import { CreditBalanceResponse } from "@albus-ts/sdk/models";

let value: CreditBalanceResponse = {
  balanceUsd: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `balanceUsd`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | Your current credit balance as a decimal USD string (e.g. "14.99"). Negative when overdrawn.<br/> |