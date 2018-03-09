import React from 'react';
import { Cover, Message, Options, Records, Stats, Targets } from '../index';

export default ({
  paused,
  message,
  options,
  records, recordsHeaders, recordsClose,
  stats,
  targets, targetHit
}) => (
  <div className="qb-game">
    {<Targets targets={targets} onClick={targetHit} />}
    {<Options options={options} />}
    {<Stats stats={stats} />}
    {paused ? <Cover /> : ''}
    {records ? <Records records={records} headers={recordsHeaders} onClick={recordsClose} /> : ''}
    {message ? <Message message={message} /> : ''}
  </div>
);
