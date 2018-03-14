export default function restart(state, param, store) {
  store.recordHide().gamePrepare().messageShow('welcome');

  return {};
}
