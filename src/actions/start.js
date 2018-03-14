export default function start(state, param, store) {
  store
    .messageHide()
    .gameStart()
    .targetAdd()
    .loop();

  return {};
}
