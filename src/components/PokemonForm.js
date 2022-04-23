import React from 'react'
import { Form } from 'semantic-ui-react'

function PokemonForm({pokeinput, setPokeinput, handleSubmit}) {
  
function handleChange(e){
  setPokeinput({...pokeinput,
 [e.target.name]: e.target.value})
 }
return (
  <div>
    <h3>Add a Pokemon!</h3>
    <Form onSubmit={(e) => handleSubmit(e, pokeinput)}>
      <Form.Group widths="equal">
        <Form.Input fluid label="Name" placeholder="Name" name="name" value={pokeinput.name} onChange={handleChange}/>
        <Form.Input fluid label="hp" placeholder="hp" name="hp" value={pokeinput.hp} onChange={handleChange}/>
        <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={pokeinput.sprites.frontUrl} onChange={handleChange}/>
        <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={pokeinput.sprites.backUrl} onChange={handleChange}/>
      </Form.Group>
      <Form.Button>Submit</Form.Button>
    </Form>
  </div>
)

}

export default PokemonForm


