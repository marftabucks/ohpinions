import React from 'react';

import classes from './Typography.module.css'

const subheading = (props) => ( 
        <h2 className={[classes.Subheading, props.classes].join(' ')} style={props.style}>{props.children}</h2>
    );
 
export default subheading;