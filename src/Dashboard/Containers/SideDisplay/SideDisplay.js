import React from 'react';
import classes from './SideDisplay.module.css';


const SideContainer = props => {

   const containerClass = props.className ? classes['side-container'] + ' ' + props.className : classes['side-container']
   return (
       <div className={containerClass}>
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