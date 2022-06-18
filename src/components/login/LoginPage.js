import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './login.css';

/* 
    1. Pone el fondo con un useEffect() para evitar que salga en otras páginas... (tratar de mejorar esto)
    2. Crea referencias a los input de username y password.
    3. Obtiene el estado 'user' propagado desde <HeroesApp /> y el 'dispatch' para ejecutar acciones.
       Dicho estado dice si hay un usuario con sesión iniciada o no (aquí no debería, teniendo en cuenta la funcionalidad de las rutas)
    4. Al hacer submit del formulario, se detiene el envío.
    5. Se obtienen los valores de los input por las referencias.
    6. Se obtiene la última ruta (Dashboard) en la que estuvo el usuario antes de cerrar sesión, si no existe, será '/'.
    7. Dispara la acción de tipo 'login' mandando los datos del usuario.
    8. Se navega a la ruta.
*/

export const LoginPage = () => {
  
  const navigate = useNavigate();
  const inputUsername = useRef();
  const inputPassword = useRef();

  const authContext = useContext(AuthContext); 
  const { user, dispatch } = authContext;

  const handleLogin = (e) => {
    e.preventDefault();

    const username = inputUsername.current.value;
    const password = inputPassword.current.value;
    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
      type: types.login,
      payload: username
    });

    navigate(lastPath, { replace: true });
    // navigate('/', { replace: true });
  }

  // Para poner fondo en el login...
  useEffect(() => {
    document.querySelector('body').classList.add('with-bg');

      return () => document.querySelector('body').classList.remove('with-bg');
  }, []);

  return (
    <div id='login-page' className='animate__animated animate__backInUp'>
      <div className="login-form">
        <form action="/" method="post" onSubmit={ handleLogin }>
            <h2 className="text-center">Iniciar sesión</h2>       
            <div className="form-group">
                <input
                  type="text"
                  name="username"
                  ref={ inputUsername }
                  // defaultValue={ username }
                  // onChange={ handleInputChange }
                  className="form-control"
                  placeholder="Usuario"
                />
            </div>
            <div className="form-group">
                <input
                  type="password"
                  name="password"
                  ref={ inputPassword }
                  // defaultValue={ password }
                  // onChange={ handleInputChange }
                  className="form-control"
                  placeholder="Contraseña"
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Log in</button>
            </div>
            <div className="clearfix">
                <label className="float-left form-check-label"><input type="checkbox" /> Recordarme </label>
                <a href="#" className="float-right">¿Contraseña olvidada?</a>
            </div>        
        </form>
        <p className="text-center"><a href="#">Crear una cuenta</a></p>
      </div>
    </div>
  )
}
