# AgentConfig

The agent configuration for a run: the model, tools, instructions, and MCP servers that define its behavior. Runs with the same configuration share a revision.


## Example Usage

```typescript
import { AgentConfig } from "@albus-ts/sdk/models";

let value: AgentConfig = {
  model: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `model`                                                          | [models.Model](../models/model.md)                               | :heavy_check_mark:                                               | N/A                                                              |
| `tools`                                                          | *string*[]                                                       | :heavy_minus_sign:                                               | Names of the tools the model may call (e.g. "WEB_SEARCH").       |
| `systemPrompt`                                                   | *string*                                                         | :heavy_minus_sign:                                               | System instructions for the model. Uses a default if omitted.    |
| `maxSteps`                                                       | *number*                                                         | :heavy_minus_sign:                                               | Max model steps before the run stops. Uses a default if omitted. |
| `mcpServers`                                                     | [models.MCPServer](../models/mcp-server.md)[]                    | :heavy_minus_sign:                                               | MCP servers whose tools are offered to the model.                |