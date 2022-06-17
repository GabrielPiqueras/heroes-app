import React, { useState } from 'react';
import { heroes } from '../../data/Heroes';
import { useForm } from '../../hooks/useForm';
import { searchHeroes } from '../../selectors/searchHeroes';
import { HeroCard } from '../heroes/HeroCard';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';

export const SearchPage = () => {
    
    const navigate = useNavigate();

    const search = useLocation().search;
    const q = new URLSearchParams(search).get('q');

    const [ formValues, handleInputChange ] = useForm({ search: q });
    const { searchText } = formValues;

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
                        results.length === 0
                        ?
                            <p>No se encontraron resultados.</p>
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
