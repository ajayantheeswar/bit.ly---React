import React from 'react';
import classes from './LinkList.module.css';

import LinkItem from './LinkItem/LinkItem';

const LinkList = (props) => {

    let listResult = <p>Kindly Create Some links</p>
    if(props.links){
        listResult = props.links.map((link,index) => <LinkItem key={link.ID} link={link} onClick={() => props.onSelect(index)} />)
    }

    return (
        <div className={classes['LinkList']}>
            <div className={classes['list-info']}>
                <p>{`Links : ${1}` }</p>
                <p>{`Total Clicks : ${1}` }</p>
            </div>
            <div>
                {listResult}                
            </div>
        </div>
    )
}

export default LinkList;