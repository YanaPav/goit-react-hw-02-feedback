import React from "react";
import PropTypes from "prop-types"
import css from './Statistics.module.css'


export const Statistics = (props) => {
    const { good, neutral, bad, total, positivePercentage } = props
    return (
    <ul>
        <li className={css.voteVariant}>😊 Good:<span>{good}</span></li>
        <li className={css.voteVariant}>🤨 Neutral:<span>{neutral}</span></li>
        <li className={css.voteVariant}>☹️ Bad:<span>{bad}</span></li>
        <li className={css.voteVariant}> Total:<span>{total}</span></li> 
        <li className={css.voteVariant}> Positive feedback:<span>{positivePercentage}%</span></li>     
    </ul>)
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}