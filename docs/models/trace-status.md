# TraceStatus

How an invocation or one of its attempts ended, or `RUNNING` while it is still in flight. `CANCELED` means it was stopped on request before it answered.


## Example Usage

```typescript
import { TraceStatus } from "@albus-ts/sdk/models";

let value: TraceStatus = "RUNNING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"RUNNING" | "SUCCEEDED" | "FAILED" | "CANCELED" | Unrecognized<string>
```