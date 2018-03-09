import React from 'react';
import Field from './field';

export default ({ stats }) => (
  <div className="qb-stats">
    {stats.map((field) => <Field key={field.id} field={field} />)}
  </div>
);
