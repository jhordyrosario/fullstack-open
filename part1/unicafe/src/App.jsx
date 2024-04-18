import { useState } from 'react'

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticLine = ({title, value}) => (
  <tr>
    <td>{title}</td> 
    <td>{value}</td>
  </tr>
)

const Statistics = ({data}) => {
  if (data.all === 0) {
    return(
      <p>
        No feedback given
      </p>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine title={"good"} value={data.good} />
        <StatisticLine title={"neutral"} value={data.neutral} />
        <StatisticLine title={"bad"} value={data.bad} />
        <StatisticLine title={"all"} value={data.all} />
        <StatisticLine title={"average"} value={data.average} />
        <StatisticLine title={"positive"} value={data.positive*100 + " %"} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [statistics, setStatistics] = useState({
    good:0, neutral: 0, bad: 0, all: 0, average: 0, positive: 0
  })

  const assignGood = (goodValue) => {
    const allValue = goodValue + neutral + bad
    setStatistics({
      ...statistics,
      good: goodValue,
      all: allValue,
      average: (goodValue - bad)/allValue,
      positive: goodValue/allValue
    })
    setGood(goodValue)
  }

  const assignNeutral = (neutralValue) => {
    const allValue = good + neutralValue + bad
    
    setStatistics({
      ...statistics,
      neutral: neutralValue,
      all: allValue,
      average: (good - bad)/allValue,
      positive: good/allValue
    })

    setNeutral(neutralValue)
  }

  const assignBad = (badValue) => {
    const allValue = good + neutral + badValue

    setStatistics({
      ...statistics,
      bad: badValue,
      all: allValue,
      average: (good - badValue)/allValue,
      positive: good/allValue
    })
    setBad(badValue)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => assignGood(good + 1)} text="good" />
      <Button onClick={() => assignNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => assignBad(bad + 1)} text="bad" />

      <h2>statistics</h2>
      <Statistics data={statistics} /> 
    </div>
  )
}

export default App