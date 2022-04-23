import React, {useState, useEffect} from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

function PokemonPage() {
 const [pokemon, setPokemon] = useState([])
 const [search, setSearch] = useState('')
 const [filtered, setFiltered] = useState([])
 const [pokeinput, setPokeinput] = useState({
  id: '',
  name: "",
  hp: '',
  sprites: {
    front: "",
    back: ""
  }
 })

function handleSearch (value) {
   setSearch(value)
   setFiltered(pokemon.filter((poke) => (poke.name.includes(search))))
  //  setPokemon(pokemon.filter((poke) => (poke.name.includes(value))))
  console.log(value)
}


  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(data => setPokemon(data))
  }, [])

function handleSubmit(e, pokenew) {

  e.preventDefault()
  fetch(`http://localhost:3000/pokemon`, {
    method: "POST",
    headers : {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(pokenew)
  })
  .then(r => r.json())
   .then(data => setPokemon([...pokemon, data]))
}


  
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm pokeinput={pokeinput} setPokeinput={setPokeinput} handleSubmit={handleSubmit}/>
        <br />
        <Search handleSearch={handleSearch}/>
        <br />
        <PokemonCollection pokemon={pokemon} filtered={filtered} search={search}/>
      </Container>
    )
  }


export default PokemonPage
