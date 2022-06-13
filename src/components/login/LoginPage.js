import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.css';

export const LoginPage = () => {

  useEffect(() => {
    document.querySelector('body').classList.add('with-bg');

      return () => document.querySelector('body').classList.remove('with-bg');
  }, []);
  

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/', { replace: true });
  }

  return (
    <div id='login-page' className='animate__animated animate__backInUp'>
      <div className="login-form">
        <form action="/" method="post" onSubmit={ handleSubmit }>
            <h2 className="text-center">Iniciar sesión</h2>       
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Usuario" />
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Contraseña" />
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
