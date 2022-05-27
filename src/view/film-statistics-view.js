import { createElement } from '../render.js';

const createFilmStatisticsTemplate = () =>  '<p>130 291 movies inside</p>';


export default class FilmStatisticsView {
  getTemplate() {
    return createFilmStatisticsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
