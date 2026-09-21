# Tools

The built-in tools the model may call. Include a tool's block to offer it (e.g. {"web_search": {}}); omit it to withhold it.


## Example Usage

```typescript
import { Tools } from "@albus-ts/sdk/models";

let value: Tools = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `webSearch`                                                      | [models.WebSearchTool](../models/web-search-tool.md)             | :heavy_minus_sign:                                               | Offers the model web search.                                     |
| `computer`                                                       | [models.ComputerTool](../models/computer-tool.md)                | :heavy_minus_sign:                                               | Offers the model a persistent Linux sandbox to run commands in.<br/> |