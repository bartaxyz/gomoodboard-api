# gomoodboard-api

[![build status](https://img.shields.io/travis/bartaxyz/gomoodboard-api.svg)](https://travis-ci.org/bartaxyz/gomoodboard-api)
[![code coverage](https://img.shields.io/codecov/c/github/bartaxyz/gomoodboard-api.svg)](https://codecov.io/gh/bartaxyz/gomoodboard-api)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/bartaxyz/gomoodboard-api.svg)](LICENSE)

Unofficial API package for GoMoodboard

This is very lean package that uses scrapes the website of the board you request. And then returns all the images on the board in JSON format.

:warning: This package could break anytime. It is **NOT** officially supported.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install gomoodboard-api
```


## Usage

```js
const GomoodboardApi = require('gomoodboard-api');

const gomoodboardApi = new GomoodboardApi();

console.log(gomoodboardApi.renderName());
// script
```


## Contributors

| Name             | Website                  |
| ---------------- | ------------------------ |
| **Ondřej Bárta** | <http://ondrejbarta.xyz> |


## License

[MIT](LICENSE) © [Ondřej Bárta](http://ondrejbarta.xyz)


## 

[npm]: https://www.npmjs.com/
