/* eslint-disable no-undefined */
/* eslint-disable no-magic-numbers */
import statsConfig from './statsConfig';

const clone = (obj) => JSON.parse(JSON.stringify(obj));

export default {
  isStarted: false,
  isPaused: false,
  isOver: false,
  message: undefined,
  options: {},
  records: undefined,
  recordsHeaders: undefined,
  stats: clone(statsConfig),
  targets: [],
  targetAddInterval: 1500,
  dimensions: {
    width: 400,
    height: 400
  },
  lastRun: Date.now()
};
