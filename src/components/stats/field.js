import React from 'react';

export default ({ field: { isLimited, title, icon, value, separator, maximum } }) => (
  <div className="qb-stats-field" title={title}>
    <div className="qb-stats-field__icon">{icon}</div>
    <div className="qb-stats-field__value">{value}</div>
    { isLimited ? <div className="qb-stats-field__separator">{separator}</div> : ''}
    { isLimited ? <div className="qb-stats-field__maximum">{maximum}</div> : ''}
  </div>
);
