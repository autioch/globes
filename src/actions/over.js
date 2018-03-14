export default function over(state, param, store) {
  store
    .targetAddStop()
    .loopStop()
    .gameOver()
    .recordAdd()
    .recordShow();

  return {};
}
