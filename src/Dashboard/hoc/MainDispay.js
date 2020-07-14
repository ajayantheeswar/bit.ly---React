import React from 'react';

const MainDisplay = props => {
    return (
        <div style={props.style}>
            {props.children}
        </div>
    )
}

export default MainDisplay;