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
    const [imgDefaultPokemons,setImgDefaultPokemon] = useState('')
    const [pokemonName,setPokemonName] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemonData = await getPokemonData(pokemon);
        console.log("return");

        if (pokemonData) {
          const {species} = pokemonData
          const { sprites } = pokemonData;
          console.log(sprites)
          const imgDefaultPokemon = sprites.other['official-artwork'].front_default
          console.log(imgDefaultPokemon)
          const imgShinyPokemon = sprites.other['official-artwork']['front_shiny'];
          const types = pokemonData.types;
          const pokeName = species.name
          // Do something with the retrieved data
          console.log(imgDefaultPokemon, imgShinyPokemon, types);
          setImgDefaultPokemon(imgDefaultPokemon)
          setPokemonName(pokeName)
          console.log(imgDefaultPokemons)
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [pokemon]);

  return (
    <div>
      <Info imgDefaultPokemon = {imgDefaultPokemons} pokemonName={pokemonName} />
    </div>
  );
};

export default DisplayPokemonData;
