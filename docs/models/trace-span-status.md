# TraceSpanStatus

Whether the span succeeded. Only finished spans are returned.


## Example Usage

```typescript
import { TraceSpanStatus } from "@albus-ts/sdk/models";

let value: TraceSpanStatus = "FAILED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SUCCEEDED" | "FAILED" | Unrecognized<string>
```