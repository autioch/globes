/* eslint-disable id-length */
import React from 'react';

export default ({ onClick, target: { id, size, color: { R, G, B } } }) => (
  <div
    className="qb-target"
    onClick={() => onClick(id)}
    style={{
      backgroundColor: `rgb(${R},${G},${B})`,
      width: size,
      height: size
    }}
  >
  </div>
);
