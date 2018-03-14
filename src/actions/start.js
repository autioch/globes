export default function start(state, param, store) {
  store
    .messageHide()
    .durationStart()
    .targetStart()
    .gameStart()
    .targetAdd()
    .loop();
}
