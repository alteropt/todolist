import React, { useState } from 'react'
import classes from './Select.module.scss';
import classNames from 'classnames';

// optionsValues = arrayOf(option)
// option = {value: String, disabled?: boolean, etc.}

const Select = ({optionsValues, className, ...props}) => {
  return (
    <select 
      className={classNames(classes.select, className)} 
      {...props}
    >
        {optionsValues.map(option => (
            <option key={option.value} {...option}>{option.value}</option>
        ))}
    </select>
  )
}

export default Select;
