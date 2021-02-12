import React from 'react';

import Section from '../../UI/Section/Section';
import Card from '../../UI/Card/Card';

import classes from './Featured.module.css'

const featured = (props) => (
    <Section>
        <Card classes={classes.Card} link="#">
            <h1>Featured discussion</h1>
        </Card>
        <Card classes={classes.Card} link="#">
            <h1>Featured discussion</h1>
        </Card>
        <Card classes={classes.Card} link="#">
            <h1>Featured discussion</h1>
        </Card>
    </Section>
);
 
export default featured;