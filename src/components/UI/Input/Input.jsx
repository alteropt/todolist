import classNames from 'classnames';
import React from 'react';
import classes from './Input.module.scss';

const Input = ({
  className, 
  labelValue, 
  placeholder, 
  error,
  ...props
}) => {
  return (
    <>
      <p className={classes.input__label}>{labelValue}</p>
      <input 
          type="text" 
          className={classNames(classes.input, className)}
          placeholder={placeholder}
          {...props}
        />
        <span className={classes.input__error}>{error}</span>
    </>

  )
}

export default Input;
