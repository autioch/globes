export default function gameStart() {
  return {
    isStarted: true,
    message: undefined,
    lastRun: Date.now(),
    startTime: Date.now(),
    duration: 0
  };
}
