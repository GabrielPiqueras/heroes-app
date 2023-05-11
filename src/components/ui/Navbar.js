import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

/*
    1. Muestra el navbar del 'Dashboard', con omponentes <Link /> a rutas.
    2. Obtiene el contexto propagado desde <HeroesApp /> para saber si hay un usuario logueado.
    3. Si está logueado, muestra el nombre del usuario y el botón de 'Logout', si no, el botón de 'Login'.
    4. Si se cierra sesión, se ejecuta una acción de tipo 'logout', se borra al usuario del localStorage
       y se redirige a la página del login nuevamente.
*/ 

export const Navbar = () => {

    const navigate = useNavigate();

    const authContext = useContext(AuthContext);
    const { user: { name, logged }, dispatch } = authContext;

    const handleLogout = () => {
        dispatch({type: types.logout});

        localStorage.removeItem('user');
        navigate('/logout', { replace: true });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-login navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    {
                        (logged)
                        ?
                            (
                                <>
                                    <span id='navbar-username' className="nav-item nav-link text-info">{ name }</span>
                                    {/* <NavLink onClick={ handleLogout } className="nav-item nav-link" to="/logout">
                                        Logout
                                    </NavLink> */}
                                    <button onClick={ handleLogout } className="nav-item nav-link btn" style={{fontWeight: 'normal'}}>
                                        Logout
                                    </button>
                                </>
                            )
                        :
                            (
                                <NavLink className="nav-item nav-link" to="/login">
                                    Login
                                </NavLink>
                            )
                    }
                    
                </ul>
            </div>
        </nav>
    )
}