import React from 'react';
import { render } from 'react-dom';
import createStore from './createStore';

export default function app(initialActions, initialState, View, el) {
  const store = createStore(initialActions, initialState);

  store.subscribe((state, actions) => render(<View state={state} actions={actions}/>, el));

  return store;
}
