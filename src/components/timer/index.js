import React from 'react';
import './styles.css';

const SIXTY = 60;
const THOUSAND = 1000;

function format(milliseconds) {
  let seconds = parseInt((milliseconds / THOUSAND) % SIXTY, 10);
  let minutes = parseInt(milliseconds / (THOUSAND * SIXTY), 10);

  seconds = minutes > 0 && seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes > 0 ? `${minutes}m ` : '';

  return `${minutes}${seconds}s`;
}

export default ({ duration }) => (
  <div className="qb-timer">
    {format(duration)}
  </div>
);
