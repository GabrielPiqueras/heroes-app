import React, { useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation, useNavigate } from 'react-router-dom';

export const SearchPage = () => {
    
    const navigate = useNavigate();

    // Obtener valor del parámetro 'q' en la url (Ej: '?q=batman') y hacer la consulta para buscar esos héroes
    // useMemo memoriza la función, por tanto se disparará solo cuando cambie el 'q', si buscamos 'batman' dos veces, solo ejecutará la primera.
    const search = useLocation().search;
    const q = new URLSearchParams(search).get('q');
    const results = useMemo(() => getHeroesByName(q), [q]);

    // Guardar valor del parámetro en el input porque se ha buscado eso
    const [ formValues, handleInputChange ] = useForm({ searchText: q });
    const { searchText } = formValues;
 
    // Si se envía el formulario, cargamos la ruta pasando el nuevo parámetro 'q', repitiendo el proceso anterior
    const handleSearch = (e) => {
        e.preventDefault();

        navigate({
            pathname: '/search',
            search: `q=${searchText}`
        });
    }

    return (
        <div>
            <h1>SearchPage</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            name='searchText'
                            defaultValue={ searchText }
                            type='text'
                            onChange={ handleInputChange }
                            placeholder='Find your hero'
                            className='form-control'
                            autoComplete='off'
                        />

                        <button
                            type='submit'
                            className='btn m-1 mb-4 btn-block btn-outline-primary'
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className='col-7'>
                    <h4> Results </h4>
                    <hr />

                    {
                        // Si 'q' no es null, se buscó algo y no hubo resultados, muestro mensaje de error.
                        (q && q !== '' && results.length === 0)
                        ?
                            <div className='alert alert-danger'>
                                No se encontraron héroes con <b>{ q }</b>.
                            </div>
                        :
                            results.map(hero =>
                                <HeroCard key={hero.id} {...hero} />
                            )
                    }
                </div>
            </div>
        </div>
    )
}
