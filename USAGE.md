<!-- Start SDK Example Usage [usage] -->
```typescript
import { Albus } from "@albus-ts/sdk";

const albus = new Albus({
  xAlbusOrganization: "<value>",
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