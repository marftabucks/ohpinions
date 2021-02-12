import React from 'react';

import classes from './Section.module.css'

const section = (props) => {
    const assignedClasses = [classes.Section, props.classes].join(' ')

    return ( 
        <section className={assignedClasses}>
            {props.children}
        </section>
    );
}
 
export default section;