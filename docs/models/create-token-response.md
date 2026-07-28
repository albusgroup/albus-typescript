# CreateTokenResponse

## Example Usage

```typescript
import { CreateTokenResponse } from "@albus/sdk/models";

let value: CreateTokenResponse = {
  id: "<id>",
  name: "<value>",
  token: "<value>",
  createdAt: new Date("2024-12-01T14:28:12.387Z"),
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                  | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Globally unique lookup identifier.                                                                                    |
| `name`                                                                                                                | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Human-readable display name.                                                                                          |
| `token`                                                                                                               | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | The full API token value (format: alb-<id>-<secret>).<br/>Returned only at creation time — it cannot be retrieved again.<br/> |
| `createdAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                         | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |