import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
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
      <StatisticsLabel title={"good"} value={good} />
      <StatisticsLabel title={"neutral"} value={neutral} />
      <StatisticsLabel title={"bad"} value={bad} />
      <StatisticsLabel title={"all"} value={all} />
      <StatisticsLabel title={"average"} value={average} />
      <StatisticsLabel title={"positive"} value={positive*100 + " %"} />    </div>
  )
}

const FeedbackButton = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticsLabel = ({title, value}) => (
  <>
    <label>{title} {value}</label>
    <br/>
  </>
)

export default App