import classNames from 'classnames';
import React from 'react'
import classes from './Checkbox.module.scss';
import { TiTick } from "react-icons/ti";

const Checkbox = ({className, checked, ...props}) => {  
    return (
        <div
            className={classNames(classes.checkbox, className, (checked ? classes['checkbox-checked'] : ''))}
            {...props}
        >
            {checked && <TiTick />}
        </div>
    )
}

export default Checkbox;
