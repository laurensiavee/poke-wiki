const getPokemonData  = async (pokemon) =>{
    try{
        const respond = await fetch((`https://pokeapi.co/api/v2/pokemon/${pokemon}`))
        if(!respond.ok){
            throw new Error
        }
        const pokemonData = await respond.json()
        return pokemonData
    }catch(e){
        alert('No Pokemon Data Could Be Found With That Name')
    }
}

const displayPokemonData = async(pokemon) =>{
    const pokemonData = await getPokemonData(pokemon)
    if(pokemonData){
        const {sprites} = pokemonData
        const {other} = pokemonData
        const imgDefaultPokemon = other['official-artwork']['front-default']
        const imgShinyPokemon = other['official-artwork']['front-shiny']
        const types = types
    } 
   
    return (
        <div>
            
        </div>
    );
}


export default displayPokemonData