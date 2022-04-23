import React from 'react'
import { Card } from 'semantic-ui-react'

function PokemonCard({poke}) {
  
    return (
      <Card>
        <div>
          <div className="image">
            { <img alt="oh no!" src={poke.sprites.front}/> }
          </div>
          <div className="content">
            <div className="header">{poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {poke.hp}
            </span>
          </div>
        </div>
      </Card>
    )
    
}

export default PokemonCard
