# OAuth2ClientCredentialsAuth

An access token obtained from your identity provider with the OAuth 2.0 client credentials grant.


## Example Usage

```typescript
import { OAuth2ClientCredentialsAuth } from "@albus-ts/sdk/models";

let value: OAuth2ClientCredentialsAuth = {
  type: "oauth2_client_credentials",
  tokenUrl: "https://excitable-presume.com",
  clientId: "<id>",
  clientSecret: "<value>",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                    | *"oauth2_client_credentials"*                                                                             | :heavy_check_mark:                                                                                        | N/A                                                                                                       |
| `tokenUrl`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The identity provider's HTTPS token endpoint.                                                             |
| `clientId`                                                                                                | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The client identifier, as a secret reference or a literal.<br/>                                           |
| `clientSecret`                                                                                            | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The client secret, as a secret reference (e.g. "albus.sh/secrets/idp-client-secret"), never a raw value.<br/> |
| `audience`                                                                                                | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The audience requested from the identity provider.                                                        |
| `scopes`                                                                                                  | *string*[]                                                                                                | :heavy_minus_sign:                                                                                        | The scopes requested from the identity provider.                                                          |