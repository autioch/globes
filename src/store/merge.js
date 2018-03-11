const isObject = (obj) => obj && obj.constructor === Object;
const recreate = (obj) => Object.assign({}, obj);

export default function merge(state, change) {
  const props = Object.keys(change);

  for (let index = 0; index < props.length; index++) {
    const key = props[index];
    const value = change[key];
    const old = state[key];

    state[key] = isObject(old) && isObject(value) ? recreate(merge(old, value)) : value;
  }

  return state;
}
