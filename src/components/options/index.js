import React from 'react';
import Option from './option';// eslint-disable-line no-shadow
import './styles.scss';

export default ({ options }) => (
  <div className="qb-options">
    {Object.keys(options).sort().map((id) => <Option key={id} option={options[id]} />)}
  </div>
);
