# GetTraceResponse

## Example Usage

```typescript
import { GetTraceResponse } from "@albus-ts/sdk/models/operations";

let value: GetTraceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    invocationKey: "<value>",
    sessionId: "<id>",
    status: "SUCCEEDED",
    spansExpired: false,
    startedAt: new Date("2024-07-19T07:36:12.473Z"),
    failure: {
      kind: "crash",
      message: "The invocation failed. Try again.",
    },
    sessionPosition: 757502,
    spans: [],
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `headers`                                              | Record<string, *string*[]>                             | :heavy_check_mark:                                     | N/A                                                    |
| `result`                                               | [models.TraceResponse](../../models/trace-response.md) | :heavy_check_mark:                                     | N/A                                                    |