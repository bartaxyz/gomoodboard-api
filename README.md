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
  * [Get Board](#get-board)
* [Contributors](#contributors)
* [License](#license)


## Install

```sh
npm install gomoodboard-api
```


## Usage

### Get Board

To get a board in a structured format, use the `getBoard` method. You can get the board ID from the board url.

`.getBoard(boardId: String): Promise`

```js
const GomoodboardApi = require('gomoodboard-api');

GomoodboardApi.getBoard('pjK9oD41').then((data) => {
  // Your code
});
```

The `data` object structure is following. 

```json
[
  {
    "image": {
      "id": 12442816,
      "name": null,
      "comment": "",
      "viewable": null,
      "filepath": "/gomoodboard.com/production%2F1407439227897-rvbul86dbhloko6r-7a4f0193115d2d804696b560775573f4%2Fexposure-12.jpg",
      "full": "http://d1lfunetf0rx3e.cloudfront.net/production%2F1407439227897-rvbul86dbhloko6r-7a4f0193115d2d804696b560775573f4%2Fexposure-12.jpg",
      "order_position": null,
    }
  }
]
```


## Contributors

| Name             | Website                  |
| ---------------- | ------------------------ |
| **Ondřej Bárta** | <http://ondrejbarta.xyz> |


## License

[MIT](LICENSE) © [Ondřej Bárta](http://ondrejbarta.xyz)
