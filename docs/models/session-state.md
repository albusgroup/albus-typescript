# SessionState

Lifecycle state of the session: `RUNNING` while an invocation is in flight, otherwise how its latest invocation ended.


## Example Usage

```typescript
import { SessionState } from "@albus-ts/sdk/models";

let value: SessionState = "RUNNING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"RUNNING" | "DONE" | "FAILED" | "CANCELED" | Unrecognized<string>
```