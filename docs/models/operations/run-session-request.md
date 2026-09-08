# RunSessionRequest

## Example Usage

```typescript
import { RunSessionRequest } from "@albus-ts/sdk/models/operations";

let value: RunSessionRequest = {
  id: "<id>",
  body: {
    userPrompt: "<value>",
    agentName: "<value>",
    agent: {
      model: {
        name: "<value>",
      },
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                              | Type                                                                                                                                                                                               | Required                                                                                                                                                                                           | Description                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                               | *string*                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                 | Client-provided session identifier. Reuse it to continue the session.<br/>                                                                                                                         |
| `invocationKey`                                                                                                                                                                                    | *string*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Names the invocation and makes identical requests safe to retry. Reuse with a different body returns `409`. When omitted, the response returns a generated key and the request is not retry-safe.<br/> |
| `waitTimeoutSeconds`                                                                                                                                                                               | *number*                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                 | Wait up to this many seconds for the assistant response. Omit to wait 30 minutes; use 0 to return once accepted. A timeout does not stop the invocation.<br/>                                      |
| `body`                                                                                                                                                                                             | [models.RunSessionRequest](../../models/run-session-request.md)                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                 | N/A                                                                                                                                                                                                |