export default function loopStop({ loopTimeout }) {
  clearTimeout(loopTimeout);

  return {
    loopTimeout: null
  };
}
