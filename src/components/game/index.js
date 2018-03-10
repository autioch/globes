import React from 'react';
import { Cover, Message, Options, Records, Stats, Targets } from '../index';

import './styles.css';

export default ({ store }) => {
  const { targets, dimensions, options, stats, isPaused, isOver, records, recordsHeaders, message } = store.getState();
  const { targetHit, gamePrepare } = store;

  return (
    <div className="qb-game">
      {<Targets targets={targets} onClick={targetHit} dimensions={dimensions}/>}
      {<Options options={options} />}
      {<Stats stats={stats} />}
      {isPaused ? <Cover /> : ''}
      {isOver ? <Records records={records} headers={recordsHeaders} onClick={gamePrepare} /> : ''}
      {message ? <Message message={message} /> : ''}
    </div>
  );
};
