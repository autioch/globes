import React from 'react';
import Record from './record';

import './styles.css';

export default ({ records, headers, onClick }) => (
  <div className="qb-records__wrapper">
    <div className="qb-records" onClick={onClick}>
      <div className="qb-records__title">Game over!</div>
      <table>
        <thead>
          <tr>
            {headers.map((cell, index) => <th key={index}>{cell}</th>)}
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => <Record key={index} record={record}/>)}
        </tbody>
      </table>
    </div>
  </div>
);
