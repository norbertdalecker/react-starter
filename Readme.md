# React starter

## Libraries
This boilerplate uses the following libraries and tools:

#### Core
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://github.com/facebook/react) & [React DOM](https://github.com/facebook/react) for views.
- [Redux](https://github.com/reactjs/redux) manages application state.
- [React Redux](https://github.com/reactjs/react-redux) to use React-Redux bindings.

#### Utilities
- [Reselect](https://github.com/reduxjs/reselect/) computes derived data, allowing Redux to store the minimal possible
state.
- [Redux Saga](https://github.com/redux-saga/redux-saga) makes side effects (i.e. asynchronous things like data fetching
and impure things like accessing the browser cache) in React/Redux applications easier and better.
- [React i18next](https://github.com/i18next/react-i18next) comes with locize bridging the gap between developement and translations - covering the whole translation process.
- [i18next xhr backend](https://github.com/i18next/i18next-xhr-backend) will load resources from a backend server using xhr.

#### Build System
- [Webpack](https://github.com/webpack/webpack) for bundling.
  - [Awesome TypeScript Loader](https://github.com/s-panferov/awesome-typescript-loader) as ts loader.
  - [React Hot Loader](https://github.com/gaearon/react-hot-loader) provides hot reload capability to our development
  server
  - [File Loader](https://github.com/webpack/file-loader)
  - [URL Loader](https://github.com/webpack/url-loader)
  - [Manifest Plugin](https://github.com/danethurber/webpack-manifest-plugin)
  - [TS Lint Loader](https://github.com/wbuchwalter/tslint-loader) for using tslint as preloader on build process.
  - [Workbox plugin](https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin) will generate a list of URLs to precache and add that precache manifest to an existing service worker file. It will otherwise leave the file as-is.

#### Dev & Prod Server
- [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
- [Webpack Hot Middleware](https://github.com/webpack/webpack-hot-middleware)

#### Developer Experience
- [TS Lint](https://github.com/palantir/tslint) for linting TypeScript files.

## Installation

You can clone from this repository and use master

```bash
$ git clone https://github.com/norbertdalecker/react-starter
$ cd react-starter
$ yarn install
```

## Usage

```bash
# Running

$ yarn start # This starts the app in development mode

# Building 

$ yarn build:prod

```
