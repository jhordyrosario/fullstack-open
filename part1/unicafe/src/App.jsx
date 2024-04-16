import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const assignGood = (newValue) => {
    setGood(newValue)
  }

  const assignNeutral = (newValue) => {
    setNeutral(newValue)
  }

  const assignBad = (newValue) => {
    setBad(newValue)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <FeedbackButton onClick={() => assignGood(good + 1)} text="good" />
      <FeedbackButton onClick={() => assignNeutral(neutral + 1)} text="neutral" />
      <FeedbackButton onClick={() => assignBad(bad + 1)} text="bad" />

      <h2>statistics</h2>
      <StatisticsLabel text={"good " + good} />
      <StatisticsLabel text={"neutral " + neutral} />
      <StatisticsLabel text={"bad " + bad} />
    </div>
  )
}

const FeedbackButton = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticsLabel = ({text}) => (
  <>
    <label>{text}</label>
    <br/>
  </>
)

export default App