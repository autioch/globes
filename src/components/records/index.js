import React from 'react';
import Record from './record';

export default ({ records, headers, onClick }) => (
  <div className="qb-records">
    <table onClick={onClick}>
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
);
