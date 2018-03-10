export default function gamePause({ isStarted, isPaused, isOver }) {
  if (!isStarted || isOver) {
    return {};
  }

  return {
    isPaused: !isPaused
  };
}
