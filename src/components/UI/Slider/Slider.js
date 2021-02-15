import React from 'react';

import Icon from '../Icon/Icon'
import classes from './Slider.module.css';

const slider = (props) => {
    return ( 
        <div className={classes.Slider}>
            <Icon click={props.prev} icon='fas fa-angle-left'>Prev</Icon>
            {props.children}
            <Icon click={props.next} icon='fas fa-angle-right' style={{right: 0}}>Next</Icon>
        </div>
    );
}
 
export default slider;