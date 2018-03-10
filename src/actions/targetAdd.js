/* eslint-disable id-length */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-plusplus */
let nextId = 1;

const random = (max, margin) => Math.floor((Math.random() * (max - margin - margin)) + margin);

function randomColor() {
  return {
    R: Math.floor(Math.random() * 255),
    G: Math.floor(Math.random() * 255),
    B: Math.floor(Math.random() * 255)
  };
}

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

export default function targetAdd(state) {
  const size = randomSize();
  const duration = Math.floor((Math.random() * 3000) + 1000);
  const color = randomColor();
  const position = randomPosition(state.dimensions, size);

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

  return {
    targets: state.targets.concat(target),
    stats: {
      active: {
        value: state.targets.targets.length + 1,
        ...state.stats.active
      },
      ...state.stats
    }
  };
}
