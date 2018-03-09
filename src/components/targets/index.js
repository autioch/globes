import React from 'react';
import Target from './target';

import './styles.css';

export default ({ targets, dimensions, onClick }) => (
  <div className="qb-targets" style={dimensions}>
    {targets.map((target) => <Target key={target.id} target={target} onClick={onClick} />)}
  </div>
);
