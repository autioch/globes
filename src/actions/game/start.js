export default function gameStart() {
  return {
    isStarted: true,
    isPaused: false,
    isOver: false,
    lastRun: Date.now(),
    startTime: Date.now(),
    duration: 0
  };
}
