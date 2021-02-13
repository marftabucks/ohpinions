import React from 'react';

import classes from './Typography.module.css';

const heading = (props) => ( 
        <h1 className={[classes.Heading, props.classes].join(' ')} style={props.style}>{props.children}</h1>
    );
 
export default heading;