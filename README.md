<h1 align="center">Welcome to jsonld-helpers 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/jsonld-helpers" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/jsonld-helpers.svg">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> out-of-box helper collection for JSON-LD (Structure Data) for improve SEO.

## Prerequisites

- node >=10

## Install

```sh
yarn add jsonld-helpers
```

## Usage
1. generate your JSON-LD
```js
import { generateXXX } from 'jsonld-helpers'

const jsonld = generateXXX(...)
```
2. append to your html head, see your web framework (if you use nuxtjs/vuejs, here is a [example](#TODO)).
```html
<head>
  ...
  <script type="application/ld+json">
    {
      // JSON-LD Object
    }
  </script>
</head>
```

## Dev

```sh
yarn start
```

## Run tests

```sh
yarn test
```

## Author

👤 **TJ**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_