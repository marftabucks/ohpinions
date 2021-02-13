import React from 'react';

import classes from './DisplayPicture.module.css'

const displayPicture = (props) => (
    <img src={props.image} className={classes.DisplayPicture} />
);
 
export default displayPicture;