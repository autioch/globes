import React from 'react';
import { Cover, Message, Options, Records, Stats, Targets, Timer } from '../index';

import './styles.css';

export default ({ state, actions }) => {
  const { targets, dimensions, options, stats, records, recordProps, message, duration, isPaused } = state;
  const { targetHit, start, restart } = actions;

  return (
    <div className="qb-game">
      <div className="qb-game__sidebar" style={{
        width: dimensions.sidebarWidth
      }}>
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
      {records ? <Records records={records} headers={recordProps} onClick={restart} /> : ''}
      {message ? <Message message={message} onClick={start}/> : ''}
    </div>
  );
};
