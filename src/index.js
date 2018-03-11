import { Game } from './components';
import actions from './actions';
import app from './app';

const store = app(actions, {}, Game, document.getElementById('root'));

store.reset().gameResize().gamePrepare();

window.addEventListener('resize', store.gameResize);
