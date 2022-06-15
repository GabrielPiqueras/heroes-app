import React from 'react'
import { Link } from 'react-router-dom'

/* Pinta los valores del héroe en una tarjeta de bootstrap.
   Si el alter_ego es igual a los characters, no hace falta mostrar el personaje interpretado.
   Pero si es diferente es que tiene más personajes interpretados, ahí si los mostramos.
*/

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    return (
        <div className="card col-md-4 mb-3" style={ {maxWidth: 540, display: 'inline-block'} }>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`/assets/heroes/${id}.jpg`} className="img-fluid rounded-start" alt={superhero} />
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title"> { superhero } </h5>
                    <p className="card-text">{ alter_ego }</p>
                    <p className="card-text">

                        {
                            ( alter_ego !== characters )
                            &&
                            <small className="text-muted">{ characters }</small>
                        }
                    </p>

                    <p className="card-text">{ first_appearance }</p>
                    
                    <Link to={`/hero/${id}`}>
                        Más...
                    </Link>
                </div>
                </div>
            </div>
        </div>

    )
}
