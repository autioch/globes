/* eslint-disable id-length */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-plusplus */
let nextId = 1;
const SPEED = 0.01;

function randomColor() {
  return {
    R: Math.floor(Math.random() * 255),
    G: Math.floor(Math.random() * 255),
    B: Math.floor(Math.random() * 255)
  };
}

const random = (max, margin) => Math.floor((Math.random() * (max - margin - margin)) + margin);

function randomPosition({ width, height }, size) {
  const x = random(width, size);
  const y = random(height, size);

  return {
    x,
    y,
    currentX: x,
    currentY: y
  };
}

function randomSize() {
  return Math.floor(Math.random() * 100) + 50;
}

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

export default class TargetsController {
  constructor() {
    this.targets = [];
  }

  add(dimensions) {
    const size = randomSize();
    const duration = Math.floor((Math.random() * 3000) + 1000);
    const color = randomColor();
    const position = randomPosition(dimensions, size);

    const target = {
      active: true,
      created: Date.now(),
      id: nextId++,
      color,
      originalColor: color,
      position,
      size,
      duration,
      remaining: duration,
      passed: 0,
      timedOut: duration > 0
    };

    this.targets.push(target);
  }

  age(timeDiff, dimensions) {
    this.targets.forEach((target) => {
      target.remaining -= timeDiff;
      target.passed += timeDiff;
      target.timedOut = target.remaining < 1;

      if (target.timedOut) {
        target.color = clone(TIMED_OUT);
        target.position.currentY = target.position.y + (SPEED * -target.remaining * target.size);
        if ((target.position.currentY - target.size) >= dimensions.height) {
          target.dead = true;
        }
      } else {
        target.color = lerp(target.originalColor, TIMED_OUT, target.passed / target.duration);
      }
    });
  }

  hit(id) {
    this.targets = this.targets.filter((target) => target.id !== id);
  }
}
