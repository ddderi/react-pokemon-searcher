import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

function PokemonCollection({pokemon, filtered, search}) {
  
    return (
      <Card.Group itemsPerRow={6}>
        {/* <h1>Hello From Pokemon Collection</h1> */}
        {
        search ? filtered.map((poke, index) =>  <PokemonCard key={index} poke={poke}/>) :
        pokemon.map((poke, index) =>  <PokemonCard key={index} poke={poke}/>)}
      </Card.Group>
    )
  
}

export default PokemonCollection
