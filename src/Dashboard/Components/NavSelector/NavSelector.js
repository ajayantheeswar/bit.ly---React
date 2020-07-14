import React, { useState } from 'react';
import classes from './NavSelector.module.css';

import {down,menu_icon} from '../../../Assets/images/images';
import DropDown from '../../../Shared/Components/DropDown/DropDown';

const NavSelector = props => {
    
    const [isClicked,setIsClicked] = useState(false);
    const dropDownitems = ['All links' , 'Dashboard','Custom Links'];
    
    const OnClick = () => setIsClicked(!isClicked)
    
    return(
        <React.Fragment>
            <div className={classes['selector-container']}>
                <div className={classes['selector-actions']} onClick={OnClick}>
                <p>All Links</p>
                <img src={down} alt={'down'} />
                <img className={classes['menu-icon']} src={menu_icon} alt={'menu'} />
                </div>
                
                {isClicked ? (
                <DropDown>
                    {dropDownitems.map(item => <p style={{color:'black',padding:'0.5rem'}}>{item}</p>)}
                </DropDown>) : null}
            </div>
            
        </React.Fragment>
        
    );
}


export default NavSelector;