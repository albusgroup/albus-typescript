# RunSessionRequest

## Example Usage

```typescript
import { RunSessionRequest } from "@albus-ts/sdk/models";

let value: RunSessionRequest = {
  userPrompt: "<value>",
  agentName: "<value>",
  agent: {
    model: {
      name: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                             | Type                                                                                                                                                                              | Required                                                                                                                                                                          | Description                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `userPrompt`                                                                                                                                                                      | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | The user prompt driving this invocation.                                                                                                                                          |
| `agentName`                                                                                                                                                                       | *string*                                                                                                                                                                          | :heavy_check_mark:                                                                                                                                                                | Human-readable name identifying the agent (e.g. "support-triage"). Invocations sharing a name are grouped as one agent; each distinct configuration under it becomes a revision.<br/> |
| `agent`                                                                                                                                                                           | [models.AgentConfig](../models/agent-config.md)                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                | The agent configuration for an invocation: the model, tools, instructions, and MCP servers that define its behavior. Invocations with the same configuration share a revision.<br/> |