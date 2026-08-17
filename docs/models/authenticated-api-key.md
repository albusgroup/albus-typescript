# AuthenticatedApiKey

## Example Usage

```typescript
import { AuthenticatedApiKey } from "@albus-ts/sdk/models";

let value: AuthenticatedApiKey = {
  name: "<value>",
  organizationId: "42",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `name`                                          | *string*                                        | :heavy_check_mark:                              | Display name of the API key (e.g. "ci-deploy"). |                                                 |
| `organizationId`                                | *string*                                        | :heavy_check_mark:                              | The organization this key acts in.              | 42                                              |