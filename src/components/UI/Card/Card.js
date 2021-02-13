import React from 'react';

import Link from '../Link/Link';

import classes from './Card.module.css'

const card = (props) => {
    const assignedClasses = [classes.Card, props.classes].join(' ')

    if (!props.link) {
        return (
            <div className={assignedClasses}>
                <div className={classes.Blur}>
                    {props.children}
                </div>
            </div>
        )  
    } else {
        return (
            <Link href={props.link}>
                <div className={assignedClasses}>
                    <div className={classes.Blur}>
                        {props.children}  
                    </div>
                </div>
            </Link>
            
        )  
    }
    
};
 
export default card;