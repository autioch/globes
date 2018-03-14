import { merge, clone } from './utils';
import subscription from './subscription';

export default function createStore(actions, initialState = {}) {
  const state = clone(initialState);
  const store = {};
  const { subscribe, notify } = subscription(store);

  store.subscribe = subscribe;
  store.getState = () => state;

  const wireAction = (action) => (params) => {
    /* TODO Pass store as third argument, so we can call action within action. 
     * These composite actions will all call notify, but it's debounced. */
    merge(state, action(state, params));
    notify();

    /* TODO Since we don't need to "chain" actions (we can compose them), rethink what should be returned. */
    return store;
  };

  Object.entries(actions).forEach(([actionName, action]) => {
    store[actionName] = wireAction(action);
  });

  return Object.freeze(store);
}
