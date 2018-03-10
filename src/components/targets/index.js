import React from 'react';
import Target from './target';

import './styles.css';

export default ({ targets, onClick, width, height }) => (
  <div className="qb-targets" style={{
    width,
    height
  }}>
    {targets.map((target) => <Target key={target.id} target={target} onClick={onClick} />)}
  </div>
);
