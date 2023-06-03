import React, {useState, useRef, useEffect} from "react";
import Info from "./Component/Info";
import Pokeapi from './Component/Pokeapi';

function App() {

  const [pokemonName, setPokemonName] = useState()

  function handleSubmit(e) {
    // alert('A name was submitted: ' + e.target[0].value);
    setPokemonName(e.target[0].value)
    e.target[0].value = ""
    e.preventDefault();
    console.log(pokemonName)

  }

  return (
    <div>
      {/* search bar */}
      <section class="p-5 mt-9">
        <div class="ms-0 mb-5">
          <h2 class="text-2xl text-center text-white roboto"><b>Search Pokemon</b></h2>
          <div class="py-5">
            <div class="px-9">
              <form class="text-center" onSubmit={handleSubmit} >
                <input type="text" id="search-bar" placeholder="Search" aria-label="Search" 
                  class="block w-full p-2 border border-gray-300 rounded-lg" 
                  />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* info */}
      {pokemonName && <Pokeapi pokemon={pokemonName}/>}
      
      {/* <Pokeapi pokemon="pikachu"/> */}
      <Info />
    </div>
  );
}

export default App;
