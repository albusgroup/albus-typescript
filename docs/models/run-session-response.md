# RunSessionResponse

## Example Usage

```typescript
import { RunSessionResponse } from "@albus-ts/sdk/models";

let value: RunSessionResponse = {
  session: {
    id: "<id>",
    state: "DONE",
    invocationCount: 835747,
    createdAt: new Date("2026-08-13T18:36:23.796Z"),
    updatedAt: new Date("2024-12-20T02:07:11.573Z"),
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `session`                                                                                                                                                                                                                                | [models.Session](../models/session.md)                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                       | N/A                                                                                                                                                                                                                                      |
| `message`                                                                                                                                                                                                                                | [models.SessionMessage](../models/session-message.md)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                       | The assistant message this invocation produced. Absent when the invocation has not answered yet — a call with `wait_timeout_seconds=0`, or a wait that returned before the response existed. Use `GET /sessions/{id}` to read it later.<br/> |