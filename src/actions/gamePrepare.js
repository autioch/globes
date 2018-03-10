/* eslint-disable no-undefined */
import statsConfig from '../store/statsConfig';

const DEFAULT_LIFE = 10;

const clone = (obj) => JSON.parse(JSON.stringify(obj));

export default function gamePrepare() {
  const newStats = clone(statsConfig);

  newStats.life.value = DEFAULT_LIFE;

  return {
    isStarted: false,
    isPaused: false,
    isOver: false,
    stats: newStats,
    targets: [],
    message: {
      title: 'Globes!',
      content: 'Hit the globes before they gray out',
      follow: 'Click to continue...'
    }
  };
}
