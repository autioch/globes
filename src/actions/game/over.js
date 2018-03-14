export default function gameOver(state, param, store) {
  return {
    isOver: true,
    isPaused: false,
    isStarted: false
  };
}
