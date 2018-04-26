import test from 'ava';
import { getBoard } from '../src';

test('gomoodboard returns valid json object', async t => {
  t.is(
    JSON.stringify(await getBoard('pjK9oD41')),
    JSON.stringify([
      {
        image: {
          id: 12442816,
          name: null,
          comment: '',
          viewable: null,
          filepath:
            '/gomoodboard.com/production%2F1407439227897-rvbul86dbhloko6r-7a4f0193115d2d804696b560775573f4%2Fexposure-12.jpg',
          full:
            'http://d1lfunetf0rx3e.cloudfront.net/production%2F1407439227897-rvbul86dbhloko6r-7a4f0193115d2d804696b560775573f4%2Fexposure-12.jpg',
          order_position: null
        }
      }
    ])
  );
});
