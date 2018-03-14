export default function round(state, param, store) {
  store
    .durationUpdate()
    .targetDiminish()
    .targetDie()
    .loop();
}
