import { useState } from 'react'
import './App.css'
import Header  from './components/Header/header.jsx'
import Pokemonlist from './components/pokemon-list/pokemon-list.jsx';

function App() {
  //creating state to hold scores
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <Pokemonlist />
    </>
  )
}

export default App
