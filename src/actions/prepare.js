export default function prepare(state, param, store) {
  store
    .recordHide()
    .targetReset()
    .statsReset()
    .gamePrepare()
    .messageShow('welcome');
}
