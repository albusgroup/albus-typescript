# CreditLedgerEntry

## Example Usage

```typescript
import { CreditLedgerEntry } from "@albus-ts/sdk/models";

let value: CreditLedgerEntry = {
  kind: "grant",
  amountUsd: "<value>",
  reference: "<value>",
  createdAt: new Date("2026-05-08T11:42:34.998Z"),
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                    | [models.Kind](../models/kind.md)                                                                                          | :heavy_check_mark:                                                                                                        | What moved the balance: a paid purchase, an operator grant, a usage charge, or a manual adjustment.<br/>                  |
| `amountUsd`                                                                                                               | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | The signed decimal USD amount the entry moved the balance by: positive for money in, negative for usage charged.<br/>     |
| `reference`                                                                                                               | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | Identifies what the entry paid for or charged (e.g. the payment for a purchase, the metering window for a usage charge).<br/> |
| `createdAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                             | :heavy_check_mark:                                                                                                        | When the entry was recorded.                                                                                              |