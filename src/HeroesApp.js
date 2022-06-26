import React, { useEffect, useReducer, useState } from 'react'
import { AppRouter } from './routers/AppRouter'
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';

import './css/styles.css';
 
/*
  1. Si hay una sesion iniciada porque existe 'user' en localStorage, obtengo sus datos
     si no, un objeto con el login en false. Inicializo con dichos datos el reducer.

  2. Extraigo el estado (user) y la función para aplicar acciones (dispatch) y las 
     propago a todos los componentes implicados en mi router.

  3. Cada vez que cambie el estado del reducer (user), guardo sus datos en localStorage,
     es decir, la sesión habría sido iniciada.
*/
export const HeroesApp = () => {

  const init = () => {
    const user = localStorage.getItem('user');
    return JSON.parse(user) || { logged: false };
  } 

  const [ user, dispatch ] = useReducer(authReducer, [], init);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
