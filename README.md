# dotenvdotenv

Zero-dependency lib that loads environment variables from `.env.${ENV_NAME}` files

[![BuildStatus](https://img.shields.io/travis/nrotta/dotenvdotenv/master.svg?style=flat-square)](https://travis-ci.org/nrotta/dotenvdotenv)
[![NPM version](https://img.shields.io/npm/v/dotenvdotenv.svg?style=flat-square)](https://www.npmjs.com/package/dotenvdotenv)
[![Code Climate](https://codeclimate.com/github/nrotta/dotenvdotenv/badges/gpa.svg "No Nasty Code")](https://codeclimate.com/github/nrotta/dotenvdotenv)

## Install

```bash
npm install dotenvdotenv --save
```

## Usage

Require the lib as early as possible in your app

```javascript
require('dotenvdotenv');
```

Create the `.env.dev` and `.env.test` files in the root directory and add environment variables on new lines as `KEY=VALUE`

For example:

```
REDIS_HOST=localhost
REDIS_PORT=32776
```

The vars are now available on `process.env`

```javascript
redis: {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
}
```

If the `.env.${ENV_NAME}` files do no exist, an error will raised

## Supports

Node:
- v0.10
- v0.12
- v4
- v5
- v6

## FAQ

### Should I commit my `.env.${ENV_NAME}` files?

No. `.env.${ENV_NAME}` files should **not** be committed to version control. Your production environment should use the environment variables

### What happens to existing environment variables?

Existing environment variables will not be overwritten
