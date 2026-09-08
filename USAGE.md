<!-- Start SDK Example Usage [usage] -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  apiKey: process.env["ALBUS_API_KEY"] ?? "",
});

async function run() {
  const result = await albus.secrets.listSecrets();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->