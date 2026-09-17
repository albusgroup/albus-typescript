# SpendLineKind

What was used: a model billed to your credits, a model called with your own provider credential, or the compute an invocation ran on.


## Example Usage

```typescript
import { SpendLineKind } from "@albus-ts/sdk/models";

let value: SpendLineKind = "hardware";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"model" | "model_byok" | "hardware" | Unrecognized<string>
```