import { Game } from './components';
import actions from './actions';
import initialState from './store/initialState';
import setup from './setup';

const store = setup(initialState, actions, Game, document.getElementById('root'));

store.gameResize().gamePrepare();

window.addEventListener('resize', store.gameResize);
