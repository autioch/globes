/* eslint-disable id-length */
/* eslint-disable no-magic-numbers */
const SPEED = 0.01;

function lerp(fromColor, toColor, amount) {
  function ajust(start, end) {
    const adjusted = (end - start) * amount;

    return Math.round(start + adjusted);
  }

  return {
    R: ajust(fromColor.R, toColor.R),
    G: ajust(fromColor.G, toColor.G),
    B: ajust(fromColor.B, toColor.B)
  };
}

const TIMED_OUT = {
  R: 200,
  G: 200,
  B: 200
};

const clone = (obj) => JSON.parse(JSON.stringify(obj));

export default function targetDiminish({ targets, dimensions, lastRun, stats }) {
  const currentRun = Date.now();
  const timeDiff = currentRun - lastRun;
  const previousCount = targets.length;
  const newTargets = targets
    .map((target) => {
      target.remaining -= timeDiff;
      target.passed += timeDiff;
      target.timedOut = target.remaining < 1;

      if (target.timedOut) {
        target.color = clone(TIMED_OUT);
        target.position.currentY = target.position.y + (SPEED * -target.remaining * target.size);
      } else {
        target.color = lerp(target.originalColor, TIMED_OUT, target.passed / target.duration);
      }

      return {
        ...target
      };
    })
    .filter((target) => (target.position.currentY - target.size) >= dimensions.height);

  const life = stats.live.value - (previousCount - newTargets.length);

  return {
    isOver: life < 1,
    lastRun: currentRun,
    targets: newTargets,
    stats: {
      life: {
        value: life,
        ...stats.life
      },
      ...stats
    }
  };
}
