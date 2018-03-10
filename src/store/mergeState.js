const isObject = (obj) => obj && obj.constructor === Object;

function mergeState(state, change) {
  const props = Object.keys(change);

  for (let index = 0; index < props.length; index++) {
    const key = props[index];
    const value = change[key];
    const old = state[key];

    /* TODO We should actually create new objects here, but make it smart. */
    state[key] = isObject(old) && isObject(value) ? mergeState(old, value) : value;
  }

  return state;
}

export default mergeState;
