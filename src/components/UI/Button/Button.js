import React from 'react';

import classes from './Button.module.css'

const button = (props) => {
    let assignedClasses = [classes.Button, props.classes];

    if (props.round) {
        assignedClasses.push(classes.Round);
        assignedClasses = assignedClasses.join(' ')
        return <button onClick={props.click} className={assignedClasses}>{props.children}</button>;
    } else {
        assignedClasses = assignedClasses.join(' ')
        return <button onClick={props.click} className={assignedClasses}>{props.children}</button>;
    }
}
 
export default button;