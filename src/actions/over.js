export default function over(state, param, store) {
  store
    .targetAddStop()
    .gameOver()
    .recordAdd()
    .recordShow();
}
