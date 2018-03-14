import { clone } from '../core';
/* eslint-disable id-length */
const SPEED = 0.01;
const GREY = 200;

const TIMED_OUT = {
  R: GREY,
  G: GREY,
  B: GREY
};

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

export default function targetDiminish({ targets, lastRun }) {
  const currentRun = Date.now();
  const timeDiff = currentRun - lastRun;

  return {
    lastRun: currentRun,
    targets: targets.map((target) => {
      target.remaining -= timeDiff;
      target.passed += timeDiff;
      target.timedOut = target.remaining < 1;

      if (target.timedOut) {
        target.color = clone(TIMED_OUT);
        target.position.currentY = target.position.y + (SPEED * -target.remaining * target.size);
      } else {
        target.color = lerp(target.originalColor, TIMED_OUT, target.passed / target.duration);
      }

      return target;
    })
  };
}
