import React from 'react';

import classes from './Icon.module.css'

const icon = (props) => (
    <button 
        className={classes.Button} 
        onClick={props.click}
        style={props.style}>
            <i className={[props.icon, classes.Icon].join(' ')}>
            </i>
    </button>
)
 
export default icon;