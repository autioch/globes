import React from 'react';

import './styles.css';

export default ({ stat: { isLimited, title, icon, value, separator, maximum } }) => (
  <div className="qb-stat" title={title}>
    <div className="qb-stat__icon">{icon}</div>
    <div className="qb-stat__text">
      <div className="qb-stat__value">{value}</div>
      { isLimited ? <div className="qb-stat__separator">{separator}</div> : ''}
      { isLimited ? <div className="qb-stat__maximum">{maximum}</div> : ''}
    </div>
  </div>
);
