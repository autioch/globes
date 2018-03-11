import { Game } from './components';
import actions from './actions';
import { app } from './core';

const store = app(actions, {}, Game, document.getElementById('root'));

store.reset().gameResize().gamePrepare()
  .messageShow('welcome');

window.addEventListener('resize', store.gameResize);
