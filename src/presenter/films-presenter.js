import { render } from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmsListView from '../view/films-list-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import FilmDescriptionPopupView from '../view/film-description-popup-view.js';
import FilmsContainerView from '../view/films-contatiner-view.js';


export default class FilmsPresenter {
  filmsContainerComponent = new FilmsContainerView;
  filmsListComponent = new FilmsListView;

  init (container, filmsModel) {
    this.container = container;
    this.filmsModel = filmsModel;
    this.films = [...this.filmsModel.getFilms()];

    render(this.filmsContainerComponent, this.container);
    render(this.filmsListComponent, this.filmsContainerComponent.getElement());

    for (let i = 0; i < this.films.length; i++ ) {
      render(new FilmCardView(this.films[i]), this.filmsListComponent.getElement().querySelector('.films-list__container'));
    }

    render(new ShowMoreButtonView, this.filmsListComponent.getElement());
    render(new FilmDescriptionPopupView, this.container);
  }
}
