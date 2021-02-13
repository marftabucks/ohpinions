import React from 'react';

import classes from './Tag.module.css'

const tag = (props) => (
    <span 
        className={classes.Tag}>
            {props.children}
    </span>
);
 
export default tag;