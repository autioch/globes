export default function targetDie({ targets, dimensions, stats }) {
  const allowedTop = dimensions.targetsHeight;
  const newTargets = targets.filter((target) => (target.position.currentY - target.size) <= allowedTop);

  return {
    targets: newTargets,
    stats: {
      life: {
        value: stats.life.value + newTargets.length - targets.length
      },
      active: {
        value: newTargets.length
      }
    }
  };
}
