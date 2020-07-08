import React from "react";
import classes from './UrlAction.module.css'

import { arrow } from '../../../Assets/images/images';

const UrlAction = props => {
    
    const result = null

    return (
        <React.Fragment>
            <div className={classes['url-action']}>
                <div className={classes['url-action-initialise']}>
                    <input type="text" placeholder={'Shorten your link'} />
                    <button>Shorten</button>
                </div>
                <div className={classes['url-actoin__policies']}>
                    <p>By clicking SHORTEN, you are agreeing to Bitly’s <u>Terms of Service</u> and <u>Privacy Policy</u> </p>
                </div>
                {result}
            </div>
            <div className={classes['scroll-for-more']}>
                <p>Scroll to learn more</p>
                <img src={arrow}></img>
            </div>
        </React.Fragment>
    );
}

export default UrlAction;