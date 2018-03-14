import { durationStart, durationUpdate } from './duration';
import { environmentResize } from './environment';
import { gameOver, gamePrepare, gameStart } from './game';
import { messageHide, messageShow } from './message';
import { recordAdd, recordHide, recordShow } from './records';
import { statsReset } from './stats';
import { targetAdd, targetAddStop, targetDie, targetDiminish, targetHit, targetReset, targetStart } from './target';

import loop from './loop';
import round from './round';
import prepare from './prepare';
import start from './start';
import over from './over';

export default {
  durationStart, // start
  durationUpdate, // round
  environmentResize,
  gameOver, // over
  gamePrepare, // prepare
  gameStart, // start
  loop,
  messageHide, // start
  messageShow, // prepare
  over,
  prepare,
  round,
  recordAdd, // over
  recordHide, // prepare
  recordShow, // over
  start,
  statsReset, // prepare
  targetAdd, // start
  targetAddStop, // over
  targetDie, // round
  targetDiminish, // round
  targetHit,
  targetReset, // prepare
  targetStart // start
};
