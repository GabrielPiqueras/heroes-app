import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './login.css';

export const LoginPage = () => {
  const inputUsername = useRef();
  const inputPassword = useRef();
  const navigate = useNavigate();

  const authContext = useContext(AuthContext); 
  const { user, dispatch } = authContext;
  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();

    const username = inputUsername.current.value;
    const password = inputPassword.current.value;

    dispatch({
      type: types.login,
      payload: username
    });

    navigate('/', { replace: true });
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
