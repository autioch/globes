import { merge, clone } from './utils';
import subscription from './subscription';

export default function createStore(actions, initialState = {}) {
  const state = clone(initialState);
  const store = {};
  const { subscribe, notify } = subscription(store);

  store.subscribe = subscribe;
  store.getState = () => state;

  const wireAction = (action) => (params) => {
    merge(state, action(state, params));
    notify();

    return store;
  };

  Object.entries(actions).forEach(([actionName, action]) => {
    store[actionName] = wireAction(action);
  });

  return Object.freeze(store);
}
