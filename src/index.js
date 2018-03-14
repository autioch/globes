import { Game } from './components';
import actions from './actions';
import { app } from './core';
import initialState from './initialState';

const store = app(actions, initialState, Game, document.getElementById('root'));

store.environmentResize().prepare();

window.addEventListener('resize', store.environmentResize);
