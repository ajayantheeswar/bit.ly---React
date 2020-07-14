import React ,{useState} from 'react';
import classes from './LinkAction.module.css';
import {down} from '../../../Assets/images/images';
import DropDown from '../../../Shared/Components/DropDown/DropDown';
const LinkAction = props => {
    const [isClicked,setIsClicked] = useState(false);
    const dropDownitems = ['Create','Campaingn'];

    const OnClick = () => setIsClicked(!isClicked)

    return (
        <React.Fragment>
        <div className={classes['selector-container']}>
            <div className={classes['selector-actions']} onClick={OnClick}>
            <p>Create</p>
            <img src={down} alt={'down'} />     
            </div>
            
            {isClicked ? (
            <DropDown>
                {dropDownitems.map(item => <p style={{color:'black' , padding:'0.5rem'}} onClick={item ==='Create' ? props.onSideToggle : null}>{item}</p>)}
            </DropDown>) : null}
        </div>
            
        </React.Fragment>
    );
}

export default LinkAction;