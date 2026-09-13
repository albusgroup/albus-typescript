# GetSpendRequest

## Example Usage

```typescript
import { GetSpendRequest } from "@albus-ts/sdk/models/operations";

let value: GetSpendRequest = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `since`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_minus_sign:                                                                                             | Include usage from the UTC day containing this time onward. Defaults to 31 days before `until`.<br/>           |
| `until`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_minus_sign:                                                                                             | Include usage through the end of the UTC day containing this time. Defaults to now and must be after `since`.<br/> |