import { environmentResize } from './environment';
import { messageHide, messageShow } from './message';
import { recordAdd, recordHide, recordShow } from './records';
import { targetAdd, targetAddStop, targetDie, targetDiminish, targetHit } from './target';

import gameDuration from './gameDuration';
import gameOver from './gameOver';
import gamePause from './gamePause';
import gamePrepare from './gamePrepare';
import gameStart from './gameStart';

import loop from './loop';
import loopStop from './loopStop';
import over from './over';
import reset from './reset';
import restart from './restart';
import start from './start';

export default {
  gameDuration,
  gameOver,
  gamePause,
  gamePrepare,
  environmentResize,
  gameStart,
  loop,
  loopStop,
  messageHide,
  messageShow,
  over,
  recordAdd,
  recordHide,
  recordShow,
  reset,
  start,
  restart,
  targetAdd,
  targetAddStop,
  targetDie,
  targetDiminish,
  targetHit
};
