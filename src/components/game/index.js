import React from 'react';
import { Cover, Message, Options, Records, Stats, Targets, Intervals, Timer } from '../index';

import './styles.css';

export default ({ state, actions }) => {
  const { targets, dimensions, options, stats, records, recordProps, message, duration } = state;
  const { isStarted, isPaused, isOver } = state;
  const { targetHit, gamePrepare, gameStart } = actions;

  return (
    <div className="qb-game">
      <div className="qb-game__sidebar" style={{
        width: dimensions.sidebarWidth
      }}>
        {isStarted && !isPaused ? <Intervals actions={actions}/> : ''}
        {<Options options={options} />}
        {<Stats stats={stats} />}
        {<Timer duration={duration} />}
      </div>
      {<Targets
        targets={targets}
        onClick={targetHit}
        width={dimensions.targetsWidth}
        height={dimensions.targetsHeight}
      />}
      {isPaused ? <Cover /> : ''}
      {isOver ? <Records records={records} headers={recordProps} onClick={gamePrepare} /> : ''}
      {message ? <Message message={message} onClick={gameStart}/> : ''}
    </div>
  );
};
