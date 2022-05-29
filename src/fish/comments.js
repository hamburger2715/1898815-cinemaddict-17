import { getRandomInteger } from '../util.js';
import { EMOTIONS } from '../const.js';
import {COMMENTS , AUTHORS} from '../fish/comment-consts.js';
import { generateDate } from './movie.js';

export const generateComment = () => ({
  id: 42,
  author: AUTHORS[getRandomInteger(0, AUTHORS.length -1)],
  comment: COMMENTS[getRandomInteger(0, COMMENTS.length -1)],
  date: generateDate('day'),
  emotion: EMOTIONS[getRandomInteger(0, EMOTIONS.length - 1)],
});

