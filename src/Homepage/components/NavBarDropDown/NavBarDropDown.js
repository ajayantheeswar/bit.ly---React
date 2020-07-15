import React, { Component } from 'react';
import classes from './NavBarDropDown.module.css';
import Authlinks from '../AuthLinks/AuthLink';
import { NavLink } from 'react-router-dom';


class NavBarDropDown extends Component {
    render () {
        return (
            true ? 
                <div className={classes['NavBarDropDown']} >
                    <NavLink className={classes['Link']} to='/signup'>Sign Up</NavLink>
                    <NavLink className={classes['Link']} to='/signin'>Sign In</NavLink>
                </div> : null
        )
    }
}

export default NavBarDropDown;