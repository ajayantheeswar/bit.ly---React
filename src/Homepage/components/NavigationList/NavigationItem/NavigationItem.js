import React from 'react';
import classes from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const NavigationItem = props => {
    return <NavLink className={classes.NavigationItem} to={props.to}>{props.name}</NavLink>
}

export default NavigationItem;