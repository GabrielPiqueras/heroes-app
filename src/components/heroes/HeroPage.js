import React, { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

/* 1. Recibo el id del héroe por parámetro de la ruta .
   2. Llamo a getHeroById() para conseguir los datos del héroe.
   3. Si hero es 'undefined', redireccionar a la página de inicio.
*/

export const HeroPage = () => {

  const { heroId } = useParams();
  const hero = getHeroById(heroId);

  if (!hero) {
    return <Navigate to='/' />
  }

  const { id, superhero } = hero;
  
  return (
    <div>
        <h1>{ superhero }</h1>

        <div className='row'>
          <div className='col-md-4'>
            <img src={`/assets/heroes/${id}.jpg`} alt={ superhero } />
          </div>
          <div className='col-md-12'>
            
          </div>
        </div>
    </div>
  )
}
