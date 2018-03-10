import React from 'react';

export default ({ onClick, target: { id, size, color, position } }) => (
  <div
    className="qb-target"
    onClick={() => onClick(id)}
    style={{
      backgroundColor: `rgb(${color.R},${color.G},${color.B})`,
      width: size,
      height: size,
      transform: `translate(${position.currentX}px,${position.currentY}px)`
    }}
  >
  </div>
);
