/* eslint-disable id-length */
/* eslint-disable no-magic-numbers */
/* eslint-disable no-plusplus */
let nextId = 1;

const random = (max, min = 0) => Math.floor((Math.random() * (max - min)) + min);
const randomSize = () => random(100, 50);

function randomColor() {
  return {
    R: random(255),
    G: random(255),
    B: random(255)
  };
}

function randomPosition({ targetsWidth, targetsHeight }, size) {
  const x = random(targetsWidth - size, size);
  const y = random(targetsHeight - size, size);

  return {
    x,
    y,
    currentX: x,
    currentY: y
  };
}

function generateTarget({ dimensions }) {
  const size = randomSize();
  const duration = Math.floor((Math.random() * 3000) + 1000);
  const color = randomColor();

  return {
    active: true,
    created: Date.now(),
    id: nextId++,
    color,
    originalColor: color,
    position: randomPosition(dimensions, size),
    size,
    duration,
    remaining: duration,
    passed: 0,
    timedOut: duration > 0
  };
}

export default function targetAdd(state, param, store) {
  const targets = state.targets.concat(generateTarget(state));

  store.targetAddStop();

  return {
    targets,
    stats: {
      active: {
        value: targets.length
      }
    },
    targetAddTimeout: setTimeout(store.targetAdd, 1000)
  };
}
