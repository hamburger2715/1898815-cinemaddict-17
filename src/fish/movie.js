import dayjs from 'dayjs';
import { getRandomInteger, getRandomElements, getRandomFloat } from '../util.js';
import { TITLES, POSTERS, DIRECTORS, COUNTRIES, GENRES, ACTORS, WRITERS } from './const.js';

const generateDate = (unit) => {
  const gap = getRandomInteger(1, 30);

  return dayjs().subtract(gap, unit).toDate();
};

const  generateFilm = () => ({
  id : 0,
  comments: [],
  filmInfo: {
    title: TITLES[getRandomInteger(0, TITLES.length - 1)],
    alternativeTitle: 'ALT',
    totalRating: getRandomFloat(0, 10),
    poster: POSTERS[getRandomInteger(0, POSTERS.length - 1)],
    ageRating: `${getRandomInteger(0, 18)}+`,
    director: DIRECTORS[getRandomInteger(0, DIRECTORS.length - 1)],
    writers: getRandomElements( WRITERS, 3),
    actors: getRandomElements( ACTORS, 3),
    release: {
      date: generateDate('year'),
      releaseCountry: COUNTRIES[getRandomInteger(0, COUNTRIES.length - 1)]
    },
    runtime: getRandomInteger(45, 180),
    genre: getRandomElements(GENRES, 3),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget',
  },
  userDetails: {
    watchlist: Boolean(getRandomInteger()),
    alreadyWatched: Boolean(getRandomInteger()),
    watchingDate: generateDate('month'),
    favorite: Boolean(getRandomInteger()),
  },
});

export {generateFilm, generateDate};
