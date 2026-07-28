# Token

API token metadata. Never includes the token value.

## Example Usage

```typescript
import { Token } from "@albus/sdk/models";

let value: Token = {
  id: "<id>",
  name: "<value>",
  createdAt: new Date("2024-12-05T22:32:20.968Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Globally unique lookup identifier (the first segment of the token string).                    |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Human-readable display name for the token.                                                    |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastUsedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Timestamp of the last time this token was used for authentication.                            |