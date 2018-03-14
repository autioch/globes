export default function loop(state, param, store) {
  return {
    loopTimeout: setTimeout(store.loop, 10)
  };
}
