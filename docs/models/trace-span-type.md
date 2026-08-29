# TraceSpanType

The kind of span (e.g. "invocation" for the invocation itself, "step" for one step, "model_call" for a model call, "tool_call" for a tool call it requested).


## Example Usage

```typescript
import { TraceSpanType } from "@albus-ts/sdk/models";

let value: TraceSpanType = "model_call";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"invocation" | "step" | "model_call" | "tool_call" | Unrecognized<string>
```