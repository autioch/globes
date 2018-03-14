export default function durationUpdate({ durationStart }) {
  return {
    duration: Date.now() - durationStart
  };
}
