export default function gameStart() {
  return {
    isStarted: true,
    message: undefined,
    lastRun: Date.now()
  };
}
