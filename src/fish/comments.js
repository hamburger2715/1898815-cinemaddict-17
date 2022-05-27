import { getRandomInteger } from "../util.js";
import { EMOTIONS } from "../const.js";

const generateComment = () => ({
  id: 42,
  author: '',
  comment: '',
  date: '',
  emotion: EMOTIONS[getRandomInteger(0, EMOTIONS.length - 1)],
});

