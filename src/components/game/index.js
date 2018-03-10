import React from 'react';
import { Cover, Message, Options, Records, Stats, Targets, Intervals, Timer } from '../index';

import './styles.css';

export default ({ store }) => {
  const { targets, dimensions, options, stats, records, recordProps, message, duration } = store.getState();
  const { isStarted, isPaused, isOver } = store.getState();
  const { targetHit, gamePrepare, gameStart } = store;

  return (
    <div className="qb-game">
      <div className="qb-game__sidebar" style={{
        width: dimensions.sidebarWidth
      }}>
        {isStarted && !isPaused ? <Intervals store={store}/> : ''}
        {<Options options={options} />}
        {<Stats stats={stats} />}
        {<Timer duration={duration} />}
      </div>
      {<Targets targets={targets} onClick={targetHit} width={dimensions.targetsWidth} height={dimensions.targetsHeight}/>}
      {isPaused ? <Cover /> : ''}
      {isOver ? <Records records={records} headers={recordProps} onClick={gamePrepare} /> : ''}
      {message ? <Message message={message} onClick={gameStart}/> : ''}
    </div>
  );
};
