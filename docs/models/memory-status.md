# MemoryStatus

`active` while agents read this memory, `invalidated` once a later memory replaced it.


## Example Usage

```typescript
import { MemoryStatus } from "@albus-ts/sdk/models";

let value: MemoryStatus = "invalidated";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "invalidated" | Unrecognized<string>
```