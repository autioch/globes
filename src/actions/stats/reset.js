const DEFAULT_LIFE = 10;

export default function statsReset({ stats }) {
  Object.entries(stats).forEach(([, stat]) => {
    stat.value = 0;
  });

  stats.life.value = DEFAULT_LIFE;

  return {
    stats
  };
}
