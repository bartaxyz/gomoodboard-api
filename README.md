# gomoodboard-api

Unofficial API package for GoMoodboard

This is very lean package that uses scrapes the website of the board you request. And then returns all the images on the board in JSON format.

:warning: This package could break anytime. It is **NOT** officially supported.


## Table of Contents

* [Install](#install)
* [Usage](#usage)
  * [.getBoard(boardId: String): Promise](#getboardboardid-string-promise)
* [Contributors](#contributors)
* [License](#license)


## Install

```sh
npm install gomoodboard-api
```


## Usage

### `.getBoard(boardId: String): Promise`

Get a board in a structured format. You can get the board ID from the gomoodboard board url.

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
