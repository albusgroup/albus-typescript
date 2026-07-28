<!-- Start SDK Example Usage [usage] -->
```typescript
import { Albus } from "@albus/sdk";

const albus = new Albus({
  security: {
    bearerAuth: process.env["ALBUS_BEARER_AUTH"] ?? "",
  },
});

async function run() {
  const result = await albus.secrets.listSecrets();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->