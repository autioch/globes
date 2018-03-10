export default function targetHit({ targets, stats }, id) {
  const newTargets = targets.filter((target) => target.id !== id);

  return {
    targets: newTargets,
    stats: {
      hit: {
        value: stats.hit.value + 1
      },
      active: {
        value: targets.length
      }
    }
  };
}
