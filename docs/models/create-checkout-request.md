# CreateCheckoutRequest

## Example Usage

```typescript
import { CreateCheckoutRequest } from "@albus-ts/sdk/models";

let value: CreateCheckoutRequest = {
  amountUsd: 170173,
  successUrl: "https://afraid-institute.info/",
  cancelUrl: "https://hopeful-exasperation.net/",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `amountUsd`                                                                             | *number*                                                                                | :heavy_check_mark:                                                                      | Whole US dollars of credit to buy (e.g. 20).                                            |
| `successUrl`                                                                            | *string*                                                                                | :heavy_check_mark:                                                                      | Where the buyer's browser goes after paying. Must be https (or http on localhost).<br/> |
| `cancelUrl`                                                                             | *string*                                                                                | :heavy_check_mark:                                                                      | Where the buyer's browser goes if they back out. Must be https (or http on localhost).<br/> |