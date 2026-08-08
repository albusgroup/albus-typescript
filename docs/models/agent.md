# Agent

An agent identified by name, with its current revision's full configuration and the list of all its revisions newest first.


## Example Usage

```typescript
import { Agent } from "@albus-ts/sdk/models";

let value: Agent = {
  name: "<value>",
  current: {
    revision: "<value>",
    createdAt: new Date("2024-10-08T03:31:19.676Z"),
    config: {
      model: {
        name: "<value>",
      },
    },
  },
  revisions: [
    {
      revision: "<value>",
      createdAt: new Date("2024-10-01T17:38:40.153Z"),
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `name`                                                         | *string*                                                       | :heavy_check_mark:                                             | The agent's name.                                              |
| `current`                                                      | [models.AgentRevision](../models/agent-revision.md)            | :heavy_check_mark:                                             | One revision of an agent, with its full configuration.         |
| `revisions`                                                    | [models.AgentRevisionMeta](../models/agent-revision-meta.md)[] | :heavy_check_mark:                                             | All revisions of the agent, newest first.                      |