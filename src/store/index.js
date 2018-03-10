/* eslint-disable no-undefined */
/* eslint-disable no-magic-numbers */

function mergeState(state, stateChange) {
  return Object.assign(state, stateChange);
}

export default function createStore(initialState, actions, callback) {
  const state = initialState;

  const store = {
    getState: () => state
  };

  const wrapAction = (action) => (params) => {
    mergeState(state, action(state, params));
    callback(store);
  };

  Object.entries(actions).forEach(([actionName, action]) => {
    store[actionName] = wrapAction(action);
  });

  return Object.freeze(store);
}
