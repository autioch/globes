import React from 'react';
import { Message, Options, Records, Stats, Targets, Timer } from '../index';

import './styles.css';

export default ({ state, store }) => {
  const { targets, dimensions, options, stats, records, recordProps, message, duration } = state;
  const { targetHit, start, prepare } = store;

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
      {records ? <Records records={records} headers={recordProps} onClick={prepare} /> : ''}
      {message ? <Message message={message} onClick={start}/> : ''}
    </div>
  );
};
