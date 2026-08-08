# Type

The kind of event (e.g. "llm_call" for a model call and the tool calls it requested, "tool_result" for a tool's output).


## Example Usage

```typescript
import { Type } from "@albus-ts/sdk/models";

let value: Type = "llm_call";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"llm_call" | "tool_result" | "harness_exit" | "run_failed" | "run_succeeded" | Unrecognized<string>
```