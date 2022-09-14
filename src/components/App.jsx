import React, { Component } from "react";
import { Statistics } from './Statistics/Statistics'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import {Section} from './Section/Section'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (event) => {
    const vote = event.currentTarget.name
    return this.setState(prevState => ({
      [vote]: prevState[vote] + 1
  }))
  }
    
  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state
    return bad+neutral+good
  }

  countPositiveFeedbackPercentage = () => {
    const {good, bad, neutral} = this.state
    let startPositivePercentage = 0
    const finalPositivePercentage = Math.round((good / (bad + neutral + good)) * 100)
    if (finalPositivePercentage > 0) {
        startPositivePercentage = finalPositivePercentage
        } 
    return startPositivePercentage
  }

  render() {
    const { good, bad, neutral } = this.state
    const totalFids = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    const isFeedback = good || bad || neutral    
    
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}
      >
        <div>
          <Section title='Please leave feedback'>
            <FeedbackOptions
              options={['good', 'neutral', 'bad']}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>

         <Section title='Statistics'>
            {isFeedback
              ? <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={totalFids}
                  positivePercentage={positivePercentage}
              />
              : "No feedback given"
            }
              
          </Section>                   
        </div>
      </div>
    )
  }
  
};
