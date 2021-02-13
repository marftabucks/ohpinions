import React from 'react';

import Auxiliary from '../../hoc/Auxiliary'
import Tag from './Tag/Tag';
import Icon from '../UI/Icon/Icon'
import Subheading from '../Typography/Subheading';
import UserInfo from '../Others/UserInfo/UserInfo';

import classes from './Topic.module.css'


const post = (props) => {
    const tags = props.tags.map(tag => {
        return <Tag key={tag}>{tag}</Tag> 
    })

    return (
        <Auxiliary>
            <div className={classes.Header}>
                <p>{props.category}</p>
                <span>
                    <p>{props.date}</p>
                    <Icon icon='fas fa-external-link-alt' />
                </span>
            </div>
            <Subheading style={{marginTop: '.5rem'}}>{props.topic}</Subheading>
            <div>
                {tags}
            </div>
            <div className={classes.Footer}>
                <UserInfo 
                    image={props.image} 
                    author={props.author}
                    bio={props.bio}/>
                <div>
                    <Icon icon='far fa-thumbs-up' />
                    <Icon icon='far fa-thumbs-down' style={{marginLeft: '.5rem'}}/>
                </div>
            </div>
        </Auxiliary>
    );
};
 
export default post;