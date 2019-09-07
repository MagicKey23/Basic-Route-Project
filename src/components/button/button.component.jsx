import React from 'react';
import './button.styles.scss';

const Button = (props) => {
  return (
      <div className="btn">
          {props.children}
      </div>
  )
}
export default Button;