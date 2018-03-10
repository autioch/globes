function calculatePoints({ size, remaining }) {
  return Math.ceil(remaining / size);
}

export default function targetHit({ targets, stats }, id) {
  const foundTarget = targets.find((target) => target.id === id);

  if (!foundTarget) {
    return {};
  }

  const newTargets = targets.filter((target) => target.id !== id);

  return {
    targets: newTargets,
    stats: {
      hit: {
        value: stats.hit.value + 1
      },
      active: {
        value: targets.length
      },
      points: {
        value: stats.points.value + calculatePoints(foundTarget)
      }
    }
  };
}
