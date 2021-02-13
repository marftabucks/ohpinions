import React from 'react';

import Section from '../../UI/Section/Section';
import Card from '../../UI/Card/Card';
import Topic from '../../Topic/Topic';
import Heading from '../../Typography/Heading'

import classes from './Featured.module.css'

import DATA from '../../../seeds/topics.json';

const featured = (props) => {
    const topics = DATA.topics.map(topic => {
        return (
            <Card classes={classes.Card} key={topic.id}>
                <Topic 
                    topic={topic.topic}
                    tags={topic.tags} 
                    date={topic.date}
                    category={topic.category}
                    author={topic.author}
                    bio={topic.bio}
                    image={topic.image}
                />
            </Card>
        );
    })

    return (
    <Section>
        <Heading classes={classes.Heading}>Find out what's happening.</Heading>
        <div className={classes.CardContainer}>
            {topics}
        </div>
    </Section>
)};
 
export default featured;