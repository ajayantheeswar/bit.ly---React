import React from 'react';
import classes from './AuthLink.module.css'
import { NavLink } from 'react-router-dom';
import NavigationItem from '../NavigationList/NavigationItem/NavigationItem';


const Authlinks = props => (
    <div className={classes['AuthLink']}>
        <a className={classes['Link']} href='#'>Sign Up</a>
        <a className={classes['Link']} href='#'>Login</a>
        <a className={classes['Link-cta']} href='#'>Get Quote</a>
    </div>
);

export default Authlinks