# TokenUsage

Tokens consumed. Absent when none were recorded.

## Example Usage

```typescript
import { TokenUsage } from "@albus-ts/sdk/models";

let value: TokenUsage = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `inputTokens`                                                                                                             | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `outputTokens`                                                                                                            | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `totalTokens`                                                                                                             | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | N/A                                                                                                                       |
| `thinkingTokens`                                                                                                          | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Tokens the model spent reasoning before it answered, as reported by the provider. Absent when the provider reports none.<br/> |