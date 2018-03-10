/* eslint-disable no-undefined */
import statsConfig from '../store/statsConfig';

const DEFAULT_LIFE = 5;

const clone = (obj) => JSON.parse(JSON.stringify(obj));

export default function gameStart() {
  const newStats = clone(statsConfig);

  newStats.life.value = DEFAULT_LIFE;

  return {
    paused: false,
    message: undefined,
    stats: newStats
  };
}
