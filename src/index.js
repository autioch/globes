/* eslint-disable no-use-before-define */
import Game from './components';
import React from 'react';
import { render } from 'react-dom';
import createStore from './store';
import actions from './actions';
import initialState from './store/initialState';

const rootEl = document.getElementById('root');

const store = createStore(initialState, actions, renderGame);

const renderGame = () => render(<Game store= {store}/>, rootEl);

renderGame();
