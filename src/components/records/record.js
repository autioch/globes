import React from 'react';

export default ({ record }) => (
  <tr className="qb-records-row">
    {record.map((cell, index) => <td key={index}>{cell}</td>)}
  </tr>
);
