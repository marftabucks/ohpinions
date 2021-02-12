import React from 'react';

import Section from '../../UI/Section/Section';
import Card from '../../UI/Card/Card';

import classes from './RecentPosts.module.css'

const recentPosts = (props) => (
    <Section classes={classes.RecentPosts}>
        <Card classes={classes.Card} link="#">
            <h1>recentPosts</h1>
        </Card>
        <Card classes={classes.Card} link="#">
            <h1>recentPosts</h1>
        </Card>
        <Card classes={classes.Card} link="#">
            <h1>recentPosts</h1>
        </Card>
    </Section>
);
 
export default recentPosts;