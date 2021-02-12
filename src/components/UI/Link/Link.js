import React from 'react';

import classes from './Link.module.css'

const link = (props) => (
    <a href={props.link} className={classes.Link}>
        {props.children}
    </a>
);
 
export default link;