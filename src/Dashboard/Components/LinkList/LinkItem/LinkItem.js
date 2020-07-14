import React from 'react';
import classes from './LinkItem.module.css';

import {level} from '../../../../Assets/images/images';

const LinkItem = props =>{
   return (
       <div className={classes['LinkItem']} onClick={props.onClick}>
           <div className={classes['link-details']}>
                <p>{new Date(+props.link.Date).toISOString()}</p>
                <p>{props.link.Name}</p>
                <p>bit.ly/<span>{props.link.ShortenedURL}</span></p>
           </div>
           <div className={classes['link-click']}>
               <span>{props.link.Count}</span>
               <img src={level} alt="wave" />
           </div>
       </div>
   ) 
}

export default LinkItem;