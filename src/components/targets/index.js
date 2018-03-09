import React from 'react';
import Target from './target';

import './styles.css';

export default ({ targets, onClick }) => (
  <div className="qb-targets" >
    {targets.map((target) => <Target key={target.id} target={target} onClick={onClick} />)}
  </div>
);
