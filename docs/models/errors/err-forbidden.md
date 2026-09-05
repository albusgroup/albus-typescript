# ErrForbidden

## Example Usage

```typescript
import { ErrForbidden } from "@albus-ts/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `message`                                             | *string*                                              | :heavy_check_mark:                                    | Human-readable error message                          | this action requires the admin role                   |
| `code`                                                | *string*                                              | :heavy_check_mark:                                    | Machine-readable reason (e.g. "forbidden_not_admin"). | forbidden_not_admin                                   |