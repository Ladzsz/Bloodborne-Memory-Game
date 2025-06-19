import './pokemon-list.css'
import { useState, useEffect } from 'react';
import shuffleArray from '../../utils/shuffle';

function Pokemonlist({score, bestScore, setScore, setBestScore}) {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [clickedIds, setClickedIds] = useState([]);

    useEffect(() => {
        async function fetchPokemon() {
            const promises = [];
            const usedIds = new Set();
            setLoading(true);

            // Get 12 unique random Pokémon IDs between 1 and 898 (the national dex range)
            while (usedIds.size < 12) {
                const id = Math.floor(Math.random() * 898) + 1;
                usedIds.add(id);
            }

            // Fetch each Pokémon's data
            for (let id of usedIds) {
                promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()));
            }

            const results = await Promise.all(promises);

            const cleanedData = results.map(poke => ({
                name: poke.name,
                image: poke.sprites.other['official-artwork'].front_default,
                id: poke.id,
            }));

            setPokemonList(cleanedData);
            setLoading(false); // <- finished loading
            }

            fetchPokemon();
    }, []); 

    //function to handle card click
    function handleCardClick(id) {
        
    if (clickedIds.includes(id)) {
      setScore(0);
      setClickedIds([]);
      alert("LOSER! Same Pokemon clicked twice, Dont give up!\n\n                           Returning score to zero...");
    } else {
      const newScore = score + 1;
      setScore(newScore);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      if (newScore % 12 === 0) {
      alert("Winner! starting new game.");
      window.location.reload();
      return;
    }

    setClickedIds(prev => [...prev, id]);
    }
    setPokemonList(prev => shuffleArray(prev));
  }

  return (
    <div id='list-area'>
      {loading ? (
        <p>Loading Pokémon...</p> 
      ) : (
        <div className="card-grid">
          {pokemonList.map(pokemon => (
        <div
          key={pokemon.id} className="card" onClick={() => handleCardClick(pokemon.id)}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>{pokemon.name}</p>
        </div>
      ))}
        </div>
      )}
    </div>
  );
}

export default Pokemonlist;