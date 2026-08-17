# RunSessionResponse

## Example Usage

```typescript
import { RunSessionResponse } from "@albus-ts/sdk/models/operations";

let value: RunSessionResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    session: {
      id: "<id>",
      state: "DONE",
      invocationCount: 835747,
      createdAt: new Date("2026-08-13T18:36:23.796Z"),
      updatedAt: new Date("2024-12-20T02:07:11.573Z"),
    },
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `headers`                                                         | Record<string, *string*[]>                                        | :heavy_check_mark:                                                | N/A                                                               |
| `result`                                                          | [models.RunSessionResponse](../../models/run-session-response.md) | :heavy_check_mark:                                                | N/A                                                               |