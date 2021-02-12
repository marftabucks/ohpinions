import React from 'react';

import Section from '../../UI/Section/Section'
import Card from '../../UI/Card/Card'

import classes from './Categories.module.css'

const categories = (props) => (
    <Section classes={classes.Categories}>
        <Card classes={classes.Card} link="#">
            Category
        </Card>
        <Card classes={classes.Card} link="#">
            Category
        </Card>
        <Card classes={classes.Card} link="#">
            Category
        </Card>
    </Section>
);
 
export default categories;