import {render} from './render.js';
import UserRankView from './view/user-rank-view.js';
import FilmStatisticsView from './view/film-statistics-view.js';
import NavigationView from './view/navigation-view.js';
import SortView from './view/sort-view.js';
import FilmsPresenter from './presenter/films-presenter.js';
import FilmsModel from './model/flms-model.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const siteStatisticsElement = document.querySelector('.footer__statistics');

const filmsModel = new FilmsModel;
const filmsPresenter = new FilmsPresenter;

render(new UserRankView, siteHeaderElement);
render(new NavigationView, siteMainElement);
render(new SortView, siteMainElement);
render(new FilmStatisticsView, siteStatisticsElement);
filmsPresenter.init(siteMainElement, filmsModel);
