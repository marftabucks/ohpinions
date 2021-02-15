import React, {Component} from 'react';

import Section from '../../UI/Section/Section';
import Card from '../../UI/Card/Card';
import Topic from '../../Topic/Topic';
import Heading from '../../Typography/Heading'
import Slider from '../../UI/Slider/Slider';

import classes from './Featured.module.css'

import DATA from '../../../seeds/topics.json';

const topics = DATA.topics;

class Featured extends Component  {
    state = {
        currentPos: 0,
    }

    prevHandler = () => {
        if (this.state.currentPos === 0) {
            return null;
        } else {
            this.setState(prevState => ({
                currentPos: prevState.currentPos - 1
            }))
        }   
    }

    nextHandler = () => {
        if (this.state.currentPos === topics.length - 1) {
            return null;
        } else {
            this.setState(prevState => ({
                currentPos: prevState.currentPos + 1
            }))
        } 
    }

    render() {
        const currentTopic = topics[this.state.currentPos]

        return (
            <Section>
                <Heading classes={classes.Heading}>Find out what's happening.</Heading>
                <Slider prev={this.prevHandler} next={this.nextHandler}>
                    <Card classes={classes.Card} key={currentTopic.id}>
                        <Topic 
                            topic={currentTopic.topic}
                            tags={currentTopic.tags} 
                            date={currentTopic.date}
                            category={currentTopic.category}
                            author={currentTopic.author}
                            bio={currentTopic.bio}
                            image={currentTopic.image}
                        />
                    </Card>
                </Slider>
            </Section>
        );
    }

}
 
export default Featured;