import React from 'react';
import classes from './CreateLink.module.css';

const CreateLink = props =>{
    return(
        <div className={classes['credientials-form']}>
            <div className={classes['cred__item']}>
                <label forHtml='Username'>Name</label>
                <input 
                onChange={(event) => props.onChangeHandler(event,'name')}
                type='text' value={props.linkValue.name.value} placeholder='Name' />
            </div>
            <div className={classes['cred__item']}>
                <label forHtml='Username'>Link</label>
                <input 
                onChange={(event) => props.onChangeHandler(event,'url')}
                onBlur={props.onBlurOfUrl}
                type='text' value={props.linkValue.url.value} placeholder='Link' />
            </div>
            <div className={classes['short-url']}>
                <p>bit.ly/</p>
                <input 
                onChange={(event) => props.onChangeHandler(event,'short_url')}
                 
                type='text' value={props.linkValue.short_url.value} />
                {props.error ? <p style={{color: 'red' , margin : '1rem'}}>{props.error}</p> : null}
            </div>
            <div className={classes['cred__item']}>
                <button onClick={() => props.onLinkCreateClicked()}>Create Link</button>
            </div>
        </div>
    );
}

export default CreateLink;