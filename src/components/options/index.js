import React from 'react';
import Button from './button';
import './styles.scss';

export default ({ options }) => (
  <div className="qb-options">
    {Object.keys(options).map((id) => <Button key={id} option={options[id]} />)}
  </div>
);
