import React from 'react';

import './styles.css';

export default ({ onClick, message: { title, content, follow } }) => (
  <div className="qb-message" onClick={onClick}>
    <div className="qb-message__title">{title}</div>
    <div className="qb-message__content">{content}</div>
    <div className="qb-message__follow">{follow}</div>
  </div>
);
