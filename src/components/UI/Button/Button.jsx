import React from 'react';
import classes from './Button.module.scss'
import classNames from 'classnames';

const Button = ({children, className, disabledView, ...props}) => {

    return (
        <button className={classNames(classes.button, className, (disabledView ? classes.disabled : ''))} {...props}>
            {children}
        </button>
    )
}

export default Button;
