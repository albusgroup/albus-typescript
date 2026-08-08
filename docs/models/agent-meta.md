# AgentMeta

A row in the agent list — an agent's identity and activity.

## Example Usage

```typescript
import { AgentMeta } from "@albus-ts/sdk/models";

let value: AgentMeta = {
  name: "<value>",
  revisionCount: 465987,
  createdAt: new Date("2025-05-12T02:45:39.403Z"),
  updatedAt: new Date("2026-05-26T14:34:07.563Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The agent's name.                                                                             |
| `revisionCount`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of distinct revisions of this agent.                                                   |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the agent first ran.                                                                     |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When the agent last ran.                                                                      |