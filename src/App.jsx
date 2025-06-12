import { useState } from 'react'
import './App.css'
import Header  from './components/Header/header.jsx'

function App() {
  //creating state to hold scores
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  

  return (
    <>
      <Header score={score} bestScore={bestScore} />
    </>
  )
}

export default App
