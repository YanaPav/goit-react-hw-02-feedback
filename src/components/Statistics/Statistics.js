import React from "react";
import PropTypes from "prop-types"
import css from './Statistics.module.css'


const Statistics = (props) => {
    const { good, neutral, bad, total, positivePercentage } = props
    return (
    <ul>
        <li className={css.voteVariant}>đ Good:<span>{good}</span></li>
        <li className={css.voteVariant}>đ¤¨ Neutral:<span>{neutral}</span></li>
        <li className={css.voteVariant}>âšī¸ Bad:<span>{bad}</span></li>
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

export default Statistics