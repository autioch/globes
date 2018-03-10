import React from 'react';
import { render } from 'react-dom';
import createStore from './store';

export default function setup(state, actions, App, el) {
  const store = createStore(state, actions);

  const renderApp = () => render(<App store={store}/>, el);

  store.subscribe(renderApp);

  return store;
}
