# Organization

## Example Usage

```typescript
import { Organization } from "@albus-ts/sdk/models";

let value: Organization = {
  id: "42",
  name: "Acme Corp",
  createdAt: new Date("2026-08-18T16:08:36.319Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Organization identifier                                                                       | 42                                                                                            |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | Organization display name                                                                     | Acme Corp                                                                                     |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the organization was created.                                                            |                                                                                               |