# State

Lifecycle state of the session.

## Example Usage

```typescript
import { State } from "@albusgroup/sdk/models";

let value: State = "RUNNING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"RUNNING" | "DONE" | "FAILED" | "CANCELED" | Unrecognized<string>
```