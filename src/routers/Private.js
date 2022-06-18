import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

/* 
    1. Convierte un componente en privado (por así decirlo).
    2. Si el usuario ha iniciado sesión, se renderiza el componente, si no, vuelve al /login.
    3. Guarda la última ruta privada en la que estuvo el usuario para cargarla cuando inicie sesión de nuevo.
*/

export const Private = ({ isAuth, component: Component }) => {

    const { pathname } = useLocation();
    localStorage.setItem('lastPath', pathname);
    
    return (
        ( isAuth )
        ? <Component />
        : <Navigate to='/login' />
    )
}

Private.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
