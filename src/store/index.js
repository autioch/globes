import mergeState from './mergeState';
import subscription from './subscription';

export default function createStore(initialState, actions) {
  const state = initialState;
  const store = {};
  const { subscribe, notify } = subscription(store);

  store.subscribe = subscribe;
  store.getState = () => state;

  const wrapAction = (action) => (params) => {
    mergeState(state, action(state, params));
    notify();

    return store;
  };

  Object.entries(actions).forEach(([actionName, action]) => {
    store[actionName] = wrapAction(action);
  });

  return Object.freeze(store);
}
