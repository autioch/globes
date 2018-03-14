export default function loop(state, param, store) {
  store
    .loopStop()
    .gameDuration()
    .targetDiminish()
    .targetDie();

  if (store.getState().stats.life.value < 1) {
    store.over();

    return {};
  }

  return {
    loopTimeout: setTimeout(store.loop, 10)
  };
}
