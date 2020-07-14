import React from 'react';
import classes from './AuthLink.module.css'
import { NavLink } from 'react-router-dom';
import NavigationItem from '../NavigationList/NavigationItem/NavigationItem';


const Authlinks = props => (
    <div className={classes['AuthLink']}>
        <NavLink className={classes['Link']} to='/signup'>Sign Up</NavLink>
        <NavLink className={classes['Link']} to='/signin'>Sign In</NavLink>
        <a className={classes['Link-cta']} href='#'>Get Quote</a>
    </div>
);

export default Authlinks