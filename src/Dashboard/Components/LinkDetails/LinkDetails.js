import React from 'react';
import classes from './LinkDetails.module.css';

import {level} from '../../../Assets/images/images';

const LinkDetails = props => {

    return (
        <div className={classes['Link-Details']}>
            <div className={classes['Link-Details__Creation']} >
               <span>CREATED</span>
               <span>{new Date(+props.link.Date).toISOString()}</span>
               <hr></hr>
               <span>{localStorage.getItem('name')}</span>
            </div>
            <h1 className={classes['Link--title']}>{props.link.Name}</h1>
            <p className={classes['Link--value']}>{props.link.OriginalURL}</p>
            <div className={classes['link-actions']}>
                <p>bit.ly/<span>{props.link.ShortenedURL}</span></p>
                <button>Copy</button>
                <button>Share</button>
                <button>Edit</button>
            </div>
            <hr className={classes['seperator']}/>
            <div className={classes['links-container']}>
                <div className={classes['link-clicks']}>
                    <span>{props.link.Count}</span>
                    <img src={level} alt={'level'}></img>
                    
                </div>
                <p>Total Clicks</p>
            </div>
            
        </div>
    )
}

export default LinkDetails