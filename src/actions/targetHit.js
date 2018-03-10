export default function targetHit(state, { id }) {
  const targets = state.filter((target) => target.id !== id);

  return {
    targets,
    stats: {
      hit: {
        value: state.stats.hit.value + 1,
        ...state.stats.hit
      },
      active: {
        value: targets.length,
        ...state.stats.active
      },
      ...state.stats
    }
  };
}
