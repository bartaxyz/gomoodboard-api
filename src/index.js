/*
const axios = require('axios');

const protocol = 'http';
const endpoint = `${protocol}://www.gomoonboard.com`;

const getBoardURL = boardId => `${endpoint}/boards/${boardId}`;

const findEmbeddedScriptTag = plainTextHTML => (
  plainTextWebsite.match(
    /<script type="text\/json" id="bootstrap">([\S\s]*?)<\/script>/
  )[0]
);

const stripEmbeddedScriptTag = plainTextHTML => (
  plainTextHTML
    .replace('<script type="text/json" id="bootstrap">', '')
    .replace('</script>', '')
);

const findAndStripEmbeddedScriptTag = plainTextHTML => (
  stripEmbeddedScriptTag(findEmbeddedScriptTag(plainTextHTML))
);

const fixJSONEncoding = plainTextJSON => plainTextJSON.replace(/&quot;/g, '"');

const findAndParseEmbeddedJSON = plainTextHTML => {
  const embeddedJSON = findAndStripEmbeddedScriptTag(plainTextHTML);
  return JSON.parse(fixJSONEncoding(embeddedJSON));
}

export const getBoard = (boardId) => (
  axios
    .get('http://www.gomoodboard.com/boards/pjK9oD41')
    .then(response => {
      return findAndParseEmbeddedJSON(response.data);
    });
);
*/
