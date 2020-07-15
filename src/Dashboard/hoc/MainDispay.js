import React from 'react';

const MainDisplay = props => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default MainDisplay;