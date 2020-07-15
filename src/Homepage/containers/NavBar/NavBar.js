import React from 'react';
import classes from './NavBar.module.css';

import image from '../../../Assets/images/bitly.png';
import { NavLink } from 'react-router-dom';
import NavigationList from '../../components/NavigationList/NavigationList';
import Authlinks from '../../components/AuthLinks/AuthLink';
import NavBarDropDown from '../../components/NavBarDropDown/NavBarDropDown';
import {menu_icon_black} from '../../../Assets/images/images';

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
            ],
            hammenu : false
        }
    }

    toggle = () => {
        this.setState( (prevState) => {
            return {
                ...prevState,
                hammenu : !prevState.hammenu
            }
        } )
    }
    render () {
        return (
            <>
                <div className={classes['nav-bar']} >
                    <div className={classes['nav-bar__logo']}>
                        <img src={image} alt="Logo" />
                    </div>
                    <NavigationList navlinklist={this.state.navlinklist} />
                    <Authlinks />
                    <div className={classes['ham-menu']} onClick = {() => this.toggle()}>
                        <img style={ {width : "30px"} } src={menu_icon_black} alt="img"/>
                    </div>
                </div>
             {this.state.hammenu ? <NavBarDropDown /> : null}
            </>
        );
    }


}

export default NavBar;