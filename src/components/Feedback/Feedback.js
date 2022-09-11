import React, { Component } from "react";
import css from './Feedback.module.css'

export default class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    voteGood = () => {
        this.setState(prevState => ({
            good: prevState.good + 1
        }))
    }

    voteNeutral = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1
        }))
    }

    voteBad = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1
        }))
    }
    
    countTotalFeedback = () => {
        return this.state.bad+this.state.neutral+this.state.good
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
        const {good, bad, neutral} = this.state
        return (
        <div>
            <h1>Please leave feedback</h1>
            <div className={css.btnBlock}>
                <button className={css.btn} type="button" onClick={this.voteGood}>Good</button>
                <button className={css.btn} type="button" onClick={this.voteNeutral}>Neutral</button>
                <button className={css.btn} type="button" onClick={this.voteBad}>Bad</button>
            </div>        
                
            <h2>Statistics</h2>
            <ul>
                <li className={css.voteVariant}>😊 Good:<span>{good}</span></li>
                <li className={css.voteVariant}>🤨 Neutral:<span>{neutral}</span></li>
                <li className={css.voteVariant}>☹️ Bad:<span>{bad}</span></li>
                <li className={css.voteVariant}> Total:<span>{this.countTotalFeedback()}</span></li> 
                <li className={css.voteVariant}> Positive feedback:<span>{this.countPositiveFeedbackPercentage()}%</span></li>     
            </ul>               
        </div>)
    }
}

