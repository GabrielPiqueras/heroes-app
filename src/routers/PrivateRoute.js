import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest} element={ (props) =>
            ( isAuthenticated )
            ? <Component {...props} />
            : <Navigate to='/login' />
        } />
    )   
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
