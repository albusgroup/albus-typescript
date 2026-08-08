# AgentRevisionMeta

A reference to one agent revision, without its configuration.

## Example Usage

```typescript
import { AgentRevisionMeta } from "@albus-ts/sdk/models";

let value: AgentRevisionMeta = {
  revision: "<value>",
  createdAt: new Date("2026-02-06T08:22:27.966Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `revision`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | Identifier of this agent revision.                                                            |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When this revision first ran.                                                                 |