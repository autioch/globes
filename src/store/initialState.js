/* eslint-disable no-undefined */
/* eslint-disable no-magic-numbers */
import statsConfig from './statsConfig';

const SIDEBAR_WIDTH = 200;
const clone = (obj) => JSON.parse(JSON.stringify(obj));

export default {
  isStarted: false,
  isPaused: false,
  isOver: false,
  message: undefined,
  options: {},
  records: undefined,
  recordProps: undefined,
  stats: clone(statsConfig),
  targets: [],
  targetAddInterval: 1500,
  dimensions: {
    targetsHeight: window.innerHeight,
    sidebarWidth: SIDEBAR_WIDTH,
    targetsWidth: window.innerWidth - SIDEBAR_WIDTH
  },
  duration: 0,
  lastRun: Date.now()
};
