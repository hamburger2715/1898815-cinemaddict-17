import { generateFilm } from '../fish/movie.js';

export default class FilmsModel {
  films = Array.from({length: 5}, generateFilm);

  getFilms = () => this.films;
}

