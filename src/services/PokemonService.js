import Pokemons from './Base'
import Api from "./Api"

/*
const pegarPokemons = () => Pokemons
const pegarPokemon = id => Pokemons[id - 1]

export { pegarPokemons, pegarPokemon }
*/


const pegarPokemons  = () => Api.get('/')
    .then(resposta => resposta.data)


const pegarPokemon = id => Api.get('/')
    .then(resposta => resposta.data.filter(id))
    

export {pegarPokemons, pegarPokemon}