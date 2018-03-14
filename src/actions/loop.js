export default function loop(state, param, store) {
  if (state.stats.life.value < 1) {
    store.over();

    return {};
  }

  return {
    loopTimeout: setTimeout(store.round, 10)
  };
}
