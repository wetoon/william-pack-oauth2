# oauth2

Google library for generate oauth2 token

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

```ts
const token = await createRefreshToken(
    {
        client_email: "string"
        private_key: "string"
    },
    ["https://www.googleapis.com/auth/scope"]
)
```

## Repository

[GitHub Repository](https://github.com/wetoon/william-pack-oauth2)
[NPM Package](https://www.npmjs.com/package/@william-pack/oauth2)

## License

This project is licensed under the [MIT License](LICENSE).
