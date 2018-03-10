export default function gameDuration({ startTime }) {
  return {
    duration: Date.now() - startTime
  };
}
