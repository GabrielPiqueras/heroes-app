import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

/* Recibe una 'asociación por parámetro' y llama a getHeroesByPublisher() para obtener todos los héroes de 
   dicha asociación.
   
   Cada elemento de esta lista será un componente <HeroCard /> al cuál envío toda la información del héroe para pintar
   allí sus datos. */

export const HeroList = ({ publisher }) => {

  const heroes = getHeroesByPublisher( publisher );
  
  return (
    <div>
      <div className='card-columns col-md-11'>
        {
          heroes.map(hero => 
            <HeroCard key={ hero.id } {...hero} />
          )
        }
      </div>
        
    </div>
  )
}
