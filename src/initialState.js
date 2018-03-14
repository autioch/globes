const SIDEBAR_WIDTH = 10;
const TARGET_ADD_INTERVAL = 1500;

export default {
  isStarted: false,
  isOver: false,
  message: null,
  options: {},
  records: null,
  recordProps: null,
  stats: {
    active: {
      title: 'Globes on the field',
      icon: 'COUNT',
      value: 0,
      isLimited: false
    },
    hit: {
      title: 'Globes hit',
      icon: 'HITS',
      value: 0,
      isLimited: false
    },
    points: {
      title: 'Points',
      icon: 'POINTS',
      value: 0,
      isLimited: false
    },
    life: {
      title: 'Lives',
      icon: 'LIVES',
      value: 1,
      isLimited: false
    },
    speed: {
      title: 'Globes frequency',
      icon: 'FREQ',
      value: 0,
      isLimited: false
    }
  },
  targets: [],
  targetAddInterval: TARGET_ADD_INTERVAL,
  dimensions: {
    targetsHeight: window.innerHeight,
    sidebarWidth: SIDEBAR_WIDTH,
    targetsWidth: window.innerWidth - SIDEBAR_WIDTH
  },
  messages: {
    welcome: {
      title: 'Globes!',
      content: 'Hit the globes before they gray out',
      follow: 'Click to continue...'
    }
  },
  duration: 0,
  lastRun: Date.now()
};
