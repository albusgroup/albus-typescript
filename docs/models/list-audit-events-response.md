# ListAuditEventsResponse

## Example Usage

```typescript
import { ListAuditEventsResponse } from "@albus-ts/sdk/models";

let value: ListAuditEventsResponse = {
  events: [
    {
      id: "<id>",
      sessionId: "<id>",
      invocationId: "<id>",
      type: "harness_exit",
      payload: {
        "key": "<value>",
      },
      eventTime: new Date("2026-06-09T13:25:02.981Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `events`                                                                                                            | [models.AuditEvent](../models/audit-event.md)[]                                                                     | :heavy_check_mark:                                                                                                  | N/A                                                                                                                 |
| `nextCursor`                                                                                                        | *string*                                                                                                            | :heavy_minus_sign:                                                                                                  | Cursor for the next page. Pass it as `after` to fetch the following events. Omitted when there are no more events.<br/> |