import { useState } from 'react'

const FeedbackButton = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticsLabel = ({title, value}) => (
  <>
    <label>{title} {value}</label>
    <br/>
  </>
)

const Statistics = (props) => {

  return (
    <>
      <StatisticsLabel title={"good"} value={props.good} />
      <StatisticsLabel title={"neutral"} value={props.neutral} />
      <StatisticsLabel title={"bad"} value={props.bad} />
      <StatisticsLabel title={"all"} value={props.all} />
      <StatisticsLabel title={"average"} value={props.average} />
      <StatisticsLabel title={"positive"} value={props.positive*100 + " %"} />
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)
  
  const assignGood = (goodValue) => {
    const allValue = goodValue + neutral + bad;
    const averageValue = (goodValue - bad)/allValue
    const positiveValue = goodValue/allValue

    setAll(allValue)
    setAverage(averageValue)
    setPositive(positiveValue)

    setGood(goodValue)
  }

  const assignNeutral = (neutralValue) => {
    const allValue = good + neutralValue + bad;
    const averageValue = (good - bad)/allValue
    const positiveValue = good/allValue

    setAll(allValue)    
    setAverage(averageValue)
    setPositive(positiveValue)

    setNeutral(neutralValue)
  }

  const assignBad = (badValue) => {
    const allValue = good + neutral + badValue
    const averageValue = (good - badValue)/allValue
    const positiveValue = good/allValue

    setAll(allValue)  
    setAverage(averageValue)
    setPositive(positiveValue)

    setBad(badValue)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <FeedbackButton onClick={() => assignGood(good + 1)} text="good" />
      <FeedbackButton onClick={() => assignNeutral(neutral + 1)} text="neutral" />
      <FeedbackButton onClick={() => assignBad(bad + 1)} text="bad" />

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} /> 
    </div>
  )
}

export default App