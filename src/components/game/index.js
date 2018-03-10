import React from 'react';
import { Cover, Message, Options, Records, Stats, Targets, Intervals } from '../index';

import './styles.css';

export default ({ store }) => {
  const { targets, dimensions, options, stats, records, recordProps, message } = store.getState();
  const { isStarted, isPaused, isOver } = store.getState();
  const { targetHit, gamePrepare, gameStart } = store;

  return (
    <div className="qb-game">
      {isStarted && !isPaused ? <Intervals store={store}/> : ''}
      {<Targets targets={targets} onClick={targetHit} dimensions={dimensions}/>}
      {<Options options={options} />}
      {<Stats stats={stats} />}
      {isPaused ? <Cover /> : ''}
      {isOver ? <Records records={records} headers={recordProps} onClick={gamePrepare} /> : ''}
      {message ? <Message message={message} onClick={gameStart}/> : ''}
    </div>
  );
};
