# ListTracesResponse

## Example Usage

```typescript
import { ListTracesResponse } from "@albus-ts/sdk/models";

let value: ListTracesResponse = {
  traces: [
    {
      invocationKey: "<value>",
      sessionId: "<id>",
      status: "SUCCEEDED",
      spansExpired: false,
      startedAt: new Date("2026-02-28T21:57:37.597Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `traces`                                                                                                                                                                                                                                                                 | [models.TraceSummary](../models/trace-summary.md)[]                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                                                       | This page of invocations, newest first. It can hold fewer than `limit`, or none at all, while `next_cursor` is present.<br/>                                                                                                                                             |
| `nextCursor`                                                                                                                                                                                                                                                             | *string*                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                       | Cursor for the next page. Pass it as `after`, with no filters or with every filter this listing used repeated exactly, to fetch the following traces. Present whenever there may be more traces, however few this page returned; omitted only once there are none left.<br/> |