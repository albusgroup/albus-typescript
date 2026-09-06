# ListCreditLedgerResponse

## Example Usage

```typescript
import { ListCreditLedgerResponse } from "@albus-ts/sdk/models";

let value: ListCreditLedgerResponse = {
  entries: [],
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `entries`                                                                                                             | [models.CreditLedgerEntry](../models/credit-ledger-entry.md)[]                                                        | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `nextCursor`                                                                                                          | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | Cursor for the next page. Pass it as `after` to fetch the following entries. Omitted when there are no more entries.<br/> |