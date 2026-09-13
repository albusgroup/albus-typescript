# CreditLedgerEntryKind

What moved the balance: a paid purchase, an operator grant, a usage charge, or a manual adjustment.


## Example Usage

```typescript
import { CreditLedgerEntryKind } from "@albus-ts/sdk/models";

let value: CreditLedgerEntryKind = "purchase";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"purchase" | "grant" | "usage_burn" | "adjustment" | Unrecognized<string>
```