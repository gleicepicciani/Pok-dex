import Api from "./Api"

/*
const pegarPokemons = () => Pokemons
const pegarPokemon = id => Pokemons[id - 1]

export { pegarPokemons, pegarPokemon }
*/


const pegarPokemons  = () => Api.get('/')
    .then(resposta => resposta.data)


const pegarPokemon = id => Api.get('/')
    .then(resposta => resposta.data.find(pokemon => pokemon.id == id))
    

export {pegarPokemons, pegarPokemon}