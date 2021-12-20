import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// React.meme will not work, because it's a reference value
export default React.memo(Button);
