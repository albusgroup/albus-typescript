# SessionResponse

## Example Usage

```typescript
import { SessionResponse } from "@albus-ts/sdk/models";

let value: SessionResponse = {
  session: {
    id: "<id>",
    state: "DONE",
    createdAt: new Date("2026-07-04T23:29:13.453Z"),
    updatedAt: new Date("2026-08-13T18:36:23.796Z"),
  },
  messages: [],
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `session`                                               | [models.Session](../models/session.md)                  | :heavy_check_mark:                                      | N/A                                                     |
| `messages`                                              | [models.SessionMessage](../models/session-message.md)[] | :heavy_check_mark:                                      | N/A                                                     |