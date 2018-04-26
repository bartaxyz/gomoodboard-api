import axios from 'axios';

const protocol = 'http';
const endpoint = `${protocol}://www.gomoodboard.com`;
const scriptTagContentRegExp = /<script type="text\/json" id="bootstrap">([\S\s]*?)<\/script>/;

const getBoardURL = boardId => `${endpoint}/boards/${boardId}`;

const findEmbeddedScriptTag = plainTextHTML =>
  plainTextHTML.match(scriptTagContentRegExp)[0];

const stripEmbeddedScriptTag = plainTextHTML =>
  plainTextHTML
    .replace('<script type="text/json" id="bootstrap">', '')
    .replace('</script>', '');

const findAndStripEmbeddedScriptTag = plainTextHTML =>
  stripEmbeddedScriptTag(findEmbeddedScriptTag(plainTextHTML));

const fixJSONEncoding = plainTextJSON => plainTextJSON.replace(/&quot;/g, '"');

const findAndParseEmbeddedJSON = plainTextHTML => {
  const embeddedJSON = findAndStripEmbeddedScriptTag(plainTextHTML);
  return JSON.parse(fixJSONEncoding(embeddedJSON));
};

export const getBoard = boardId =>
  axios
    .get(getBoardURL(boardId))
    .then(response => findAndParseEmbeddedJSON(response.data));
