'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBoard = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var protocol = 'http';
var endpoint = protocol + '://www.gomoodboard.com';
var scriptTagContentRegExp = /<script type="text\/json" id="bootstrap">([\S\s]*?)<\/script>/;

var getBoardURL = function getBoardURL(boardId) {
  return endpoint + '/boards/' + boardId;
};

var findEmbeddedScriptTag = function findEmbeddedScriptTag(plainTextHTML) {
  return plainTextHTML.match(scriptTagContentRegExp)[0];
};

var stripEmbeddedScriptTag = function stripEmbeddedScriptTag(plainTextHTML) {
  return plainTextHTML.replace('<script type="text/json" id="bootstrap">', '').replace('</script>', '');
};

var findAndStripEmbeddedScriptTag = function findAndStripEmbeddedScriptTag(plainTextHTML) {
  return stripEmbeddedScriptTag(findEmbeddedScriptTag(plainTextHTML));
};

var fixJSONEncoding = function fixJSONEncoding(plainTextJSON) {
  return plainTextJSON.replace(/&quot;/g, '"');
};

var findAndParseEmbeddedJSON = function findAndParseEmbeddedJSON(plainTextHTML) {
  var embeddedJSON = findAndStripEmbeddedScriptTag(plainTextHTML);
  return JSON.parse(fixJSONEncoding(embeddedJSON));
};

var getBoard = exports.getBoard = function getBoard(boardId) {
  return _axios2.default.get(getBoardURL(boardId)).then(function (response) {
    return findAndParseEmbeddedJSON(response.data);
  });
};