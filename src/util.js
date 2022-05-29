import dayjs from 'dayjs';

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a,b));
  const upper = Math.floor(Math.max(a,b));

  return Math.floor(lower + Math.random() * (upper - lower +1));
};

const getRandomFloat = (min, max, symbolsAfterDot=1) => {
  if (min >= max) {
    return 'Нужен положительный диапазон чисел!';
  }
  const number =  Math.random() * (max - min) + min;
  return +number.toFixed(symbolsAfterDot);
};

const getRandomElements = (array, amount) => {
  const arr = [];
  const cycles = getRandomInteger(1, amount);

  for (let i = 0; i < cycles; i++) {
    const element = array[getRandomInteger(0, array.length -1)];
    if (!arr.includes(element)) {
      arr.push(element);
    }
  }
  return arr;
};

const createGenreTemplate = (genres) => {
  let html = '';
  genres.forEach((genre) => {
    html += `<span class="film-details__genre">${genre}</span>`;
  });
  return html;
};

const humanizeYear = (date) => dayjs(date).format('YYYY');
const humanizeDate = (date) => dayjs(date).format('D MMMM YYYY');

export {getRandomInteger, getRandomElements, humanizeDate, getRandomFloat, humanizeYear, createGenreTemplate};
