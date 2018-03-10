/* eslint-disable no-unused-vars */
export default function gameOver(state, { recordsController }) {
  recordsController.add([10]);

  return {
    isPaused: false,
    isOver: true,
    records: recordsController.records,
    recordsHeaders: ['points']
  };
}
