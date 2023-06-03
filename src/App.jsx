import React, {useState, useRef, useEffect} from "react";
import Info from "./Component/Info";
import Pokeapi from './Component/Pokeapi';

function App() {

  const [pokemonName, setPokemonName] = useState()

  function handleSubmit(e) {
    setPokemonName(e.target[0].value.toLowerCase())
    e.target[0].value = ""
    e.preventDefault();
    console.log(pokemonName)

  }

  return (
    <div>
      {/* search bar */}
      <section class="p-5 mt-9">
        <div className="ms-0 mb-5">
          <h2 className="text-2xl text-center text-white roboto"><b>Search Pokemon</b></h2>
          <div className="py-5">
            <div className="px-9">
              <form className="text-center" onSubmit={handleSubmit} >
                <input type="text" id="search-bar" placeholder="Search" aria-label="Search" 
                  className="block w-full p-2 border border-gray-300 rounded-lg" 
                  />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* info */}
      {pokemonName && <Pokeapi pokemon={pokemonName}/>}
      
      {/* <Pokeapi pokemon="pikachu"/> */}
      {/* <Info /> */}
    </div>
  );
}

export default App;
