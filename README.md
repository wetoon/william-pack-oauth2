# Google oAuth2 v1.2.0

Google library for generate oauth2 refresh token

## Installation

Install via npm
```bash
npm install @william-pack/oauth2
```

or using bun
```bash
bun add @william-pack/oauth2
```

## Usage

ESM
```ts
import { createRefreshToken } from '@william-pack/oauth2'
```

CommonJS
```ts
const { createRefreshToken } = require('@william-pack/oauth2')
```

## Create Refresh Token
### Require
- Google Service Account only
- Google Api scopes
### Example
```ts
const token = await createRefreshToken(
    {
        client_email: "string",
        private_key: "string"
    },
    ["https://www.googleapis.com/auth/scope"]
) // Promise< string | undefined >
```

## Linked

- [GitHub Repository](https://github.com/wetoon/william-pack-oauth2)
- [NPM Package](https://www.npmjs.com/package/@william-pack/oauth2)

## License

This project is licensed under the [MIT License](LICENSE).
