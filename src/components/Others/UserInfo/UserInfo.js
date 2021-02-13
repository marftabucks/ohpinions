import React from 'react';

import DisplayPicture from '../../UI/DisplayPicture/DisplayPicture';
import classes from './UserInfo.module.css'

const userInfo = (props) => (
    <div className={classes.UserInfo}>
        <DisplayPicture image={props.image} />
        <div>
            <p className={classes.Author}>{props.author}</p>
            <p className={classes.Bio}>{props.bio}</p>
        </div>
    </div>
);
 
export default userInfo;