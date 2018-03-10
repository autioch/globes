export default function gameStart() {
  return {
    isStarted: true,
    message: undefined, // eslint-disable-line no-undefined
    lastRun: Date.now(),
    startTime: Date.now(),
    duration: 0
  };
}
