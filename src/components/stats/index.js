import React from 'react';
import Stat from './stat';

export default ({ stats }) => (
  <div className="qb-stats">
    {Object.keys(stats).sort().map((id) => <Stat key={id} stat={stats[id]} />)}
  </div>
);
