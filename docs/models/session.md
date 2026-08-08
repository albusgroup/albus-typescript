# Session

## Example Usage

```typescript
import { Session } from "@albus-ts/sdk/models";

let value: Session = {
  id: "<id>",
  state: "DONE",
  invocationCount: 678695,
  createdAt: new Date("2024-03-06T06:06:57.318Z"),
  updatedAt: new Date("2025-11-21T13:12:59.575Z"),
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`                                                                                                  | *string*                                                                                              | :heavy_check_mark:                                                                                    | Client-provided session identifier.                                                                   |
| `state`                                                                                               | [models.State](../models/state.md)                                                                    | :heavy_check_mark:                                                                                    | Lifecycle state of the session.                                                                       |
| `currentInvocationId`                                                                                 | *string*                                                                                              | :heavy_minus_sign:                                                                                    | The invocation currently running, if any. Omitted when the session is idle.<br/>                      |
| `invocationCount`                                                                                     | *number*                                                                                              | :heavy_check_mark:                                                                                    | Number of times this session has been run.                                                            |
| `agentName`                                                                                           | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Name of the agent that last ran this session.                                                         |
| `agentRevision`                                                                                       | *string*                                                                                              | :heavy_minus_sign:                                                                                    | Revision of the agent that last ran this session. Runs with the same configuration share this value.<br/> |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `updatedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_check_mark:                                                                                    | N/A                                                                                                   |