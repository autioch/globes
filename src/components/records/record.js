import React from 'react';

export default ({ record }) => (
  <tr className="qb-records-row">
    <td className="qb-records-row__counter"></td>
    {record.map((cell, index) => <td key={index}>{cell}</td>)}
  </tr>
);
