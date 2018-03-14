export default function targetAddStop({ targetAddTimeout }) {
  clearTimeout(targetAddTimeout);

  return {
    targetAddTimeout: null
  };
}
