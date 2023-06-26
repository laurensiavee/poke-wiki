import React, { useState } from "react";
import { pascalCase } from "pascal-case";

export default function Info(pokemonData) {
  const pascalCasePokemonName = pascalCase(pokemonData.pokemonName);
  console.log(pokemonData);

  const [isDefaultImage, setIsDefaultImage] = useState(true);
  const toggleImage = () => {
    setIsDefaultImage(!isDefaultImage);
  };

  return (
    <div>
      <section class="p-5 mt-9">
        <div class="ms-0 mb-5">
          <div class="container mx-auto">
            <div class="grid grid-cols-3 gap-4">
              {/* col 1, img */}
              <div class="py-5 px-2">
                <button
                  onClick={toggleImage}
                  type="button"
                  class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-[100%]"
                >
                  {isDefaultImage ? "Default" : "Shiny"}
                </button>
                <span id="pokemonImg">
                  <img
                    src={
                      isDefaultImage
                        ? pokemonData.imgDefaultPokemon
                        : pokemonData.imgShinyPokemon
                    }
                    className=""
                    alt=""
                  />
                </span>
                <h1 class="text-white text-2xl text-center my-3">
                  <b>
                    {pokemonData.pokemonName.charAt(0).toUpperCase() +
                      pokemonData.pokemonName.slice(1)}
                  </b>{" "}
                  - {pokemonData.pokedex}
                </h1>
                <div class="mx-2 my-3">
                  <span class="bg-slate-100 text-slate-900 rounded-full px-3 mx-1 py-1 my-3">
                    {pokemonData.types[0].type.name.charAt(0).toUpperCase() +
                      pokemonData.types[0].type.name.slice(1)}
                  </span>
                  {pokemonData.types[1] && (
                    <span class="bg-slate-100 text-slate-900 rounded-full px-3 mx-1 py-1 my-3">
                      {pokemonData.types[1].type.name.charAt(0).toUpperCase() +
                        pokemonData.types[1].type.name.slice(1)}
                    </span>
                  )}
                </div>
              </div>

              {/* col 2-3 desc */}
              <div class="col-span-2 bg-gray-800/75 rounded-lg py-5 px-2">
                <strong className=" text-2xl text-center justify-center flex text-white">{isDefaultImage? 'Default' : 'Shiny'} Design for the pokemon!</strong>
                <div class="px-5 flex justify-center">
                  <img src={isDefaultImage ? pokemonData.frontdefault : pokemonData.frontshiny} className="w-[250px] h-[250px]" alt="" />
                  <img src={isDefaultImage ? pokemonData.backdefault : pokemonData.backshiny} className="w-[250px] h-[250px]"alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
