import React from 'react';
import classes from './NavigationList.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationList = props => {

    const navlinklist1 = props.navlinklist.map((item,index) => <a key={index} href='#' className={classes['link']}>{item.name}</a>)

    
    console.log(navlinklist1);

    return (
        <div className={classes['navigation-list-container']}>
            <div className={classes['navigation-list']}>
                {navlinklist1}
            </div>
            <div className={classes['navigation-dropdown']}>
            
            </div>
        </div>
    );
}

export default NavigationList;