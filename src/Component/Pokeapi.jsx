import React, { useEffect,useState } from 'react';
import Info from './Info';

const getPokemonData = async (pokemon) => {
  console.log("get");
  console.log(`This Is Pokemon ${pokemon}`);
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (!response.ok) {
      throw new Error();
    }
    const pokemonData = await response.json();
    return pokemonData;
  } catch (e) {
    setTimeout(() => {
      alert('No Pokemon Data Could Be Found With That Name');
    }, 1000);
  }
};

const DisplayPokemonData = ({ pokemon }) => {
  const [pokemonData,setPokemonData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemonData(pokemon);
        console.log("data:")
        console.log(data)
        console.log(data.id)
        if (data) {
          const {species,sprites, game_indices} = data
          console.log(sprites)
          const imgDefaultPokemon = sprites.other['official-artwork'].front_default
          console.log(imgDefaultPokemon)
          const imgShinyPokemon = sprites.other['official-artwork']['front_shiny'];
          const types = data.types;
          const pokeName = species.name
          const pokedex = data.id
          const backdefault = sprites.back_default
          const frontdefault = sprites.front_default
          const backshiny = sprites.back_shiny
          const frontshiny = sprites.front_shiny
          const pokemonData = {
            imgDefaultPokemon : imgDefaultPokemon,
            imgShinyPokemon : imgShinyPokemon,
            pokemonName : pokeName,
            types: types,
            pokedex : pokedex,
            frontdefault :frontdefault,
            backdefault : backdefault,
            frontshiny : frontshiny,
            backshiny : backshiny
          };
          setPokemonData(pokemonData)
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pokemon]);

  
  return (
    <div>
      {pokemonData && <Info {...pokemonData} />}
    </div>
  );
};

export default DisplayPokemonData;