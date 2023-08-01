import { useEffect, useState } from 'react';
import './App.css';
import { pokemon, pokemonTypeData } from './types';

function App() {
  const [pokemonId, setPokemonId] = useState<string>("1");
  const [pokemon, setPokemon] = useState<pokemon>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => { onGetPokemon(pokemonId); }, []);

  const toCapitalizeFirstLetter = (string: string): string => string.replace(string[0], string[0].toUpperCase());

  const onGetPokemon = (pokemon: string) => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then(res => res.json())  
      .then(res => {
        const types = res.types.map(( typePosition: pokemonTypeData): string => toCapitalizeFirstLetter(typePosition.type.name));
        
        setPokemon({
          name: toCapitalizeFirstLetter(res.name),
          weight: res.weight,
          height: res.height,
          image: res.sprites.front_shiny,
          types,
          number: res.id
        })
      })
    .catch(() => setError(true));

  return (
    <main>
      <h1>¡Find your favorite pokémon!</h1>

      {pokemon && <figure>
          <img src={pokemon.image} />
          <figcaption className='pokemon-data-container'>
            <h2>{pokemon.name}</h2>  <br /> 
            <strong>Number: {pokemon.number}</strong> <br/>
            <strong>Weight: {pokemon.weight} hg</strong> <br/>
            <strong>Height: {pokemon.height} dm</strong> <br/>
            <div>
              {pokemon.types.map((type: string) => <strong>{type}</strong>)}
            </div>
          </figcaption>
        </figure>
      }

      <form onSubmit={(e) => { e.preventDefault(); setError(false); onGetPokemon(pokemonId); }}>
        <input onChange={e => setPokemonId(e.target.value)} />
        <button>Obtener datos del pokemon</button>
      </form>

      {error && <h3>The pokemon you are looking for does not exist</h3>}
    </main>
  )
}

export default App