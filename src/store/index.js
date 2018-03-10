import mergeState from './mergeState';

export default function createStore(initialState, actions, callback) {
  const state = initialState;
  let notifyTimeout;

  const store = {
    getState: () => state
  };

  function notify() {
    if (notifyTimeout) {
      return;
    }
    notifyTimeout = setTimeout(() => {
      notifyTimeout = null;
      callback(store);
    }, 1);
  }

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
