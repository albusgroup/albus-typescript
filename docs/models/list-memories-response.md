# ListMemoriesResponse

## Example Usage

```typescript
import { ListMemoriesResponse } from "@albus-ts/sdk/models";

let value: ListMemoriesResponse = {
  memories: [],
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `memories`                                                                                                              | [models.Memory](../models/memory.md)[]                                                                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `nextCursor`                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | Cursor for the next page. Pass it as `after` to fetch the following memories. Omitted when there are no more memories.<br/> |