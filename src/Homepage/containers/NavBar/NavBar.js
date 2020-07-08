import React from 'react';
import classes from './NavBar.module.css';

import image from '../../../Assets/images/bitly.png';
import { NavLink } from 'react-router-dom';
import NavigationList from '../../components/NavigationList/NavigationList';
import Authlinks from '../../components/AuthLinks/AuthLink';

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            navlinklist : [
                {
                    name:'Why bitly ?',
                    
                },
                {
                    name:'Solutions',
                    to : '/'
                } ,
                {
                    name:'Features',
                    to : '/'
                } ,
                {
                    name:'Pricing',
                    to : '/'
                } , 
                {
                    name:'Resources',
                    to : '/'
                }
            ]
        }
    }

    render () {
        return (
            <div className={classes['nav-bar']} >
                <div className={classes['nav-bar__logo']}>
                    <img src={image} alt="Logo" />
                </div>
                <NavigationList navlinklist={this.state.navlinklist} />
                <Authlinks />
            </div>
            
        );
    }


}

export default NavBar;