/* eslint-disable no-use-before-define */
import React from 'react';
import { render } from 'react-dom';
import { Game } from './components';
import actions from './actions';
import createStore from './store';
import initialState from './store/initialState';

const rootEl = document.getElementById('root');

const store = createStore(initialState, actions, renderGame).gamePrepare();

function renderGame() {
  render(<Game store={store}/>, rootEl);
}

renderGame();
