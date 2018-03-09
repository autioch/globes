import React from 'react';
import Field from './field';

export default ({ stats }) => (
  <div className="qb-stats">
    {Object.keys(stats).map((id) => <Field key={id} field={stats[id]} />)}
  </div>
);
