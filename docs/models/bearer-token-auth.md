# BearerTokenAuth

A static bearer token sent with every request.

## Example Usage

```typescript
import { BearerTokenAuth } from "@albus-ts/sdk/models";

let value: BearerTokenAuth = {
  type: "bearer",
  token: "<value>",
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `type`                                                                                    | *"bearer"*                                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `token`                                                                                   | *string*                                                                                  | :heavy_check_mark:                                                                        | The token, as a secret reference (e.g. "albus.sh/secrets/mcp-token"), never a raw value.<br/> |