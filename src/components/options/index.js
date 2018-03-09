import React from 'react';
import Button from './button';
import './styles.scss';

export default ({ options }) => (
  <div className="qb-options">
    {options.map((option) => <Button key={option.id} option={option} />)}
  </div>
);
