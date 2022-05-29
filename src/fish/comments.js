import { getRandomInteger } from '../util.js';
import { EMOTIONS } from '../const.js';
import {COMMENTS , AUTHORS, DATES} from '../fish/comment-consts.js';

export const generateComment = () => ({
  id: 42,
  author: AUTHORS[getRandomInteger(0, AUTHORS.length -1)],
  comment: COMMENTS[getRandomInteger(0, COMMENTS.length -1)],
  date: DATES[getRandomInteger(0, DATES.length -1)],
  emotion: EMOTIONS[getRandomInteger(0, EMOTIONS.length - 1)],
});

