import React from 'react';
import classnames from 'classnames';

export default ({ option: { checked, disabled, onClick, title, icon } }) => {
  const classes = classnames({
    'qb-option': true,
    'is-checked': checked,
    'is-disabled': disabled
  });

  return (
    <div className={classes} onClick={onClick} title={title}>
      {icon}
    </div>
  );
};
