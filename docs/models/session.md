# Session

## Example Usage

```typescript
import { Session } from "@albusgroup/sdk/models";

let value: Session = {
  id: "<id>",
  state: "DONE",
  createdAt: new Date("2026-01-13T20:23:54.676Z"),
  updatedAt: new Date("2024-03-06T06:06:57.318Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | Client-provided session identifier.                                                           |
| `state`                                                                                       | [models.State](../models/state.md)                                                            | :heavy_check_mark:                                                                            | Lifecycle state of the session.                                                               |
| `currentInvocationId`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | The invocation currently running, if any. Omitted when the session is idle.<br/>              |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |