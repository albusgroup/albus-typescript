# AgentRevision

One revision of an agent, with its full configuration.

## Example Usage

```typescript
import { AgentRevision } from "@albus-ts/sdk/models";

let value: AgentRevision = {
  revision: "<value>",
  createdAt: new Date("2026-07-03T08:08:41.747Z"),
  config: {
    model: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                            | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `revision`                                                                                                                                                       | *string*                                                                                                                                                         | :heavy_check_mark:                                                                                                                                               | Identifier of this agent revision.                                                                                                                               |
| `createdAt`                                                                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                    | :heavy_check_mark:                                                                                                                                               | When this revision first ran.                                                                                                                                    |
| `config`                                                                                                                                                         | [models.AgentConfig](../models/agent-config.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                               | The agent configuration for a run: the model, tools, instructions, and MCP servers that define its behavior. Runs with the same configuration share a revision.<br/> |