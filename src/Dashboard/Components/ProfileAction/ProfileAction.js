import React ,{useState}from 'react';
import classes from './ProfileAction.module.css'

import {user_icon , down} from '../../../Assets/images/images';
import DropDown from '../../../Shared/Components/DropDown/DropDown';
import { NavLink } from 'react-router-dom';


const ProfileAction = props => {
    const [isClicked,setIsClicked] = useState(false);
    //const dropDownitems = ['Profile Settings','Privacy Settings','Account Settings','About','Help'];
    const dropDownitems = ['Log Out'];
    const OnClick = () => setIsClicked(!isClicked)

    return (
        <React.Fragment>
        <div className={classes['selector-container']}>
            <div className={classes['selector-actions']} onClick={OnClick}>
                <img src={user_icon} alt={'down'} />
                <p>{localStorage.getItem('name')}</p>
                <img src={down} alt={'down'} style={{width: '20px'}} />
            </div>
            
            {isClicked ? (
            <DropDown>
                {dropDownitems.map(item => <p onClick={props.logOut} style={{color:'black',padding:'0.5rem'}}>{item}</p>)}
            </DropDown>) : null}
        </div>
            
        </React.Fragment>
    );
}

export default ProfileAction;