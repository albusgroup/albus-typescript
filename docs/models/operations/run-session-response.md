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
  },
  result: {
    session: {
      id: "<id>",
      state: "DONE",
      createdAt: new Date("2026-07-04T23:29:13.453Z"),
      updatedAt: new Date("2026-08-13T18:36:23.796Z"),
    },
    messages: [
      {
        cursor: 702710,
        invocationId: "<id>",
        role: "assistant",
        content: "<value>",
        createdAt: new Date("2024-05-31T08:41:09.571Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `headers`                                                  | Record<string, *string*[]>                                 | :heavy_check_mark:                                         | N/A                                                        |
| `result`                                                   | [models.SessionResponse](../../models/session-response.md) | :heavy_check_mark:                                         | N/A                                                        |