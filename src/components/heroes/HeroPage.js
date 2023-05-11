import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate, Link  } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

/* 1. Recibo el id del héroe por parámetro de la ruta .
   2. Llamo a getHeroById() para conseguir los datos del héroe. Memoriza los resultados mientras el heroId no cambie.
   3. Si hero es 'undefined', redireccionar a la página de inicio.
*/

export const HeroPage = () => {

  const navigate = useNavigate();

  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to='/' />
  }
 
  const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
  
  return (
    <div>
        <h1>{ superhero }</h1>

        <div className='row'>
          <div className='col-md-6'>
            <img src={`${process.env.PUBLIC_URL}/assets/heroes/${id}.jpg`} className='animate__animated animate__fadeInLeft' alt={ superhero } />
          </div>
          <div className='col-md-6'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'> <b> Alter ego: </b> { alter_ego } </li>
              <li className='list-group-item'> <b> Publisher: </b> { publisher } </li>
              <li className='list-group-item'> <b> First appearance: </b> { first_appearance } </li>
            </ul>

            <h5 className='mt-5'> Characters </h5>
            <p>{ characters }</p>

              <Link to='/'>
                <button
                  className='btn btn-outline-info'
                  onClick={ () => navigate(-1) }
                >
                  Volver
                </button>
              </Link>
          </div>
        </div>
    </div>
  )
}
