# SessionResponse

## Example Usage

```typescript
import { SessionResponse } from "@albus-ts/sdk/models";

let value: SessionResponse = {
  session: {
    id: "<id>",
    state: "DONE",
    invocationCount: 835747,
    createdAt: new Date("2026-08-13T18:36:23.796Z"),
    updatedAt: new Date("2024-12-20T02:07:11.573Z"),
  },
  messages: [
    {
      cursor: 185684,
      invocationId: "<id>",
      role: "assistant",
      content: "<value>",
      createdAt: new Date("2026-09-26T05:02:23.738Z"),
    },
  ],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `session`                                               | [models.Session](../models/session.md)                  | :heavy_check_mark:                                      | N/A                                                     |
| `messages`                                              | [models.SessionMessage](../models/session-message.md)[] | :heavy_check_mark:                                      | N/A                                                     |