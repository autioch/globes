import React from 'react';
import { Cover, Message, Options, Records, Stats, Targets } from '../index';

import './styles.css';

export default ({
  paused,
  message,
  options,
  records, recordsHeaders, recordsClose,
  stats,
  targets, targetHit, dimensions
}) => (
  <div className="qb-game">
    {<Targets targets={targets} onClick={targetHit} dimensions={dimensions}/>}
    {<Options options={options} />}
    {<Stats stats={stats} />}
    {paused ? <Cover /> : ''}
    {records ? <Records records={records} headers={recordsHeaders} onClick={recordsClose} /> : ''}
    {message ? <Message message={message} /> : ''}
  </div>
);
