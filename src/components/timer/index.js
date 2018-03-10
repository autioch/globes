import React from 'react';
import './styles.css';

const SIXTY = 60;
const THOUSAND = 1000;

export default ({ duration }) => {
  let seconds = parseInt((duration / THOUSAND) % SIXTY, 10);
  let minutes = parseInt(duration / (THOUSAND * SIXTY), 10);

  seconds = minutes > 0 && seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes > 0 ? `${minutes}m ` : '';

  return (
    <div className="qb-timer">
      {minutes}{seconds}s
    </div>
  );
};
