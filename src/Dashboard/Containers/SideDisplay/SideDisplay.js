import React from 'react';
import classes from './SideDisplay.module.css';


const SideContainer = props => {
   return (
       <div className={classes['side-container']}>
           <div className={classes['backdrop']}></div>
           <div className={classes['action-container']} >
                <div className={classes['action-container__Header']}>
                    <p onClick={() => props.onSideToggle(false)} >Close</p>
                </div>
                {props.children}
           </div>

       </div>
   )
}

export default SideContainer;