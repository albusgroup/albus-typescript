# MCPServer

## Example Usage

```typescript
import { MCPServer } from "@albus/sdk/models";

let value: MCPServer = {
  name: "<value>",
  url: "https://smug-noon.org",
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                         | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | Unique alias for the server. It prefixes the server's tool names (e.g. "github" exposes its search tool as "github__search").<br/> |
| `url`                                                                                                                          | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The server's Streamable HTTP endpoint.                                                                                         |
| `headers`                                                                                                                      | Record<string, *string*>                                                                                                       | :heavy_minus_sign:                                                                                                             | HTTP headers sent to the server. Values are secret references (e.g. "albus.sh/secrets/github-mcp"), not raw secret values.<br/> |
| `allowedTools`                                                                                                                 | *string*[]                                                                                                                     | :heavy_minus_sign:                                                                                                             | The server tools the model may call. Omit to allow all of them.<br/>                                                           |