# MCPServerAuth

The credential Albus presents to an MCP server, chosen by type.



## Supported Types

### `models.AlbusIdentityJWTAuth`

```typescript
const value: models.AlbusIdentityJWTAuth = {
  type: "albus_identity_jwt",
};
```

### `models.OAuth2ClientCredentialsAuth`

```typescript
const value: models.OAuth2ClientCredentialsAuth = {
  type: "oauth2_client_credentials",
  tokenUrl: "https://excitable-presume.com",
  clientId: "<id>",
  clientSecret: "<value>",
};
```

### `models.BearerTokenAuth`

```typescript
const value: models.BearerTokenAuth = {
  type: "bearer",
  token: "<value>",
};
```

