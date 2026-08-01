# RunSessionRequest

## Example Usage

```typescript
import { RunSessionRequest } from "@albusgroup/sdk/models";

let value: RunSessionRequest = {
  userPrompt: "<value>",
  model: {
    name: "<value>",
  },
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `userPrompt`                                                     | *string*                                                         | :heavy_check_mark:                                               | The user prompt driving this invocation.                         |
| `model`                                                          | [models.Model](../models/model.md)                               | :heavy_check_mark:                                               | N/A                                                              |
| `tools`                                                          | *string*[]                                                       | :heavy_minus_sign:                                               | Names of the tools the model may call (e.g. "WEB_SEARCH").       |
| `systemPrompt`                                                   | *string*                                                         | :heavy_minus_sign:                                               | System instructions for the model. Uses a default if omitted.    |
| `maxSteps`                                                       | *number*                                                         | :heavy_minus_sign:                                               | Max model steps before the run stops. Uses a default if omitted. |
| `mcpServers`                                                     | [models.MCPServer](../models/mcp-server.md)[]                    | :heavy_minus_sign:                                               | MCP servers whose tools are offered to the model.                |