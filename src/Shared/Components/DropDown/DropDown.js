import React from 'react';
import classes from './DropDown.module.css';

const DropDown = props =>{
    return (
        <div className={classes['drop-down']}>
            {props.children}
        </div>
    )
}

export default DropDown
