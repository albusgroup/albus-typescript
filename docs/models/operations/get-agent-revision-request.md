# GetAgentRevisionRequest

## Example Usage

```typescript
import { GetAgentRevisionRequest } from "@albus-ts/sdk/models/operations";

let value: GetAgentRevisionRequest = {
  name: "<value>",
  revision: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `name`                       | *string*                     | :heavy_check_mark:           | The agent's name.            |
| `revision`                   | *string*                     | :heavy_check_mark:           | The agent revision to fetch. |