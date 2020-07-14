import React from 'react';
import classes from './Navbar.module.css';

import {bitly_icon} from '../../../Assets/images/images';
import NavSelector from '../../Components/NavSelector/NavSelector';
import LinkAction from  '../../Components/LinkAction/LinkAction';
import ProfileAction from '../../Components/ProfileAction/ProfileAction'

class Navbar extends React.Component {
    render () {
        return (
            <div className={classes['nav-bar']}>
                <div className={classes['nav-bar__icon--container']}>
                    <img src={bitly_icon} alt='bitly-icon' />
                    <NavSelector />
                </div>
                <div className={classes['nav-bar__Action']}>
                    <LinkAction onSideToggle={this.props.onSideToggle}  />
                    <ProfileAction logOut={this.props.logOut} />
                </div>
            </div>
        )
    }
}

export default Navbar;