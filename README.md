## `koa-graphql-starter` [![Build Status](https://travis-ci.org/li-kai/koa-graphql-starter.svg?branch=master)](https://travis-ci.org/li-kai/koa-graphql-starter)
> An opinionated boilerplate for koa v2 and graphql.

### Setup
```bash
  # clone the repository
  λ git clone https://github.com/li-kai/koa-graphql-starter
  # change the current directory
  λ cd koa-graphql-starter
  # install yarn
  λ npm i yarn -g
  # install all dependencies
  λ yarn add
  # run the project
  λ yarn run dev
```

### Structure
```bash
├── README.md           # you're here
├── src                 # contains source files
└── test                # tests
```

### Included
- [Koa](https://github.com/koajs/koa)
- [Debug](https://github.com/visionmedia/debug) Debug messages in the development environment.
- [Bunyan](https://github.com/trentm/node-bunyan) Extensive logging module.
- [Ava](https://github.com/avajs/ava) For unit tests.
- [Boom](https://github.com/hapijs/boom) HTTP Errors.
- [Babel](https://github.com/babel/babel) Support ES6/ES7 features.
- [ESLint](https://github.com/eslint/eslint/) Linting purposes (comes with extended Airbnb's base eslint configurations).
- [Nodemon](https://github.com/remy/nodemon) Restart the server automatically (hot-reloading).

### Scripts

- `yarn run dev` - simply starts the server with hot-reloading
- `yarn test` - execute tests
- `yarn run lint` - lints all the files in `src/` folder
- `yarn run lint:fix` - fixes all the possible linting errors
- `yarn run flow` - does a full static type check with flow
- `yarn coverage` - command for coveralls or similar coverage tools

### Debug
In development environment, you may debug your application by using [Debug](https://github.com/visionmedia/debug).

First, set `DEBUG` environment variable to `app*`, or whichever heading your desire. Then, in your code,

```javascript
const debug = require('debug')('app:index');
debug('foo %s', bar);
```
**Note:** These debug messages do not appear in production environment. Use [Bunyan](https://github.com/trentm/node-bunyan) instead to log in production.
