# CreateInviteRequestRole

Role to grant the invitee. Defaults to admin when inviting to a new organization and member when inviting into an existing one.


## Example Usage

```typescript
import { CreateInviteRequestRole } from "@albus-ts/sdk/models";

let value: CreateInviteRequestRole = "admin";
```

## Values

```typescript
"admin" | "member"
```