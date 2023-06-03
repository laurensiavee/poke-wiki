import React from 'react'
import { pascalCase } from "pascal-case";
export default function Info({imgDefaultPokemon,pokemonName}) {
    const pascalCasePokemonName = pascalCase(pokemonName);
  return (
    <div>
        <section class="p-5 mt-9">
            <div class="ms-0 mb-5">
                <div class="container mx-auto">

                    <div class="grid grid-cols-3 gap-4">
                        {/* col 1, img */}
                        <div class="py-5 px-2">
                            <img src={imgDefaultPokemon} className="" />
                            <h1 class="text-white text-2xl text-center my-3"><b>{pascalCasePokemonName}</b> - pokedex</h1>
                            <div class="mx-2 my-3">
                                <span class="bg-slate-900 text-white rounded-full px-3 mx-1 py-1 my-3">
                                    element
                                </span>
                                <span class="bg-slate-900 text-white rounded-full px-3 mx-1 py-1 my-3">
                                    element
                                </span>
                            </div>
                        </div>

                        {/* col 2-3 desc */}
                        <div class="col-span-2 bg-gray-800/75 rounded-lg py-5 px-2">
                            <div class="px-5">
                                <h1 class="text-white">test1: nassmd</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
