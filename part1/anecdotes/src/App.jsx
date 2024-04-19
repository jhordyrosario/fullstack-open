import { useState } from 'react'
import './App.css'

const Anecdote = (props) => {
  return(
    <div>
      <h2>{props.title}</h2>
      <label>{props.text}</label>
      <br/>
      <label>has {props.rating} votes</label>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [ratings, setRatings] = useState(Array(anecdotes.length).fill(0))
  const [mostVotedIndex, setMostVotedIndex] = useState(0)

  const selectAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const vote = () => {
    ratings[selected] += 1
    setRatings([...ratings])

    setMostVotedIndex(maxValueIndex(ratings))
  }

  const maxValueIndex = (arr) => { 
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] > arr[maxIndex]) { 
            maxIndex = i; 
        } 
    }
    return maxIndex; 
  } 

  return (
    <div>
      <Anecdote title="Anecdote of the day" text={anecdotes[selected]} rating={ratings[selected]}/>
      <button onClick={vote}>vote</button>
      <button onClick={selectAnecdote}>next anecdote</button>
      <Anecdote title="Anecdote with most values" text={anecdotes[mostVotedIndex]} rating={ratings[mostVotedIndex]}/>
    </div>
  )
}

export default App