import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { LoginPage } from '../components/login/LoginPage';
import { DashboardRoutes } from './DashboardRoutes';
import { Private } from './Private';
import { Public } from './Public';

export const AppRouter = () => {
    
    const authContext = useContext(AuthContext);
    const { user: { logged }} = authContext;

    return (
        <Router>
            <Routes>
                <Route exact path="/login" element={ <Public isAuth={ logged } component={ LoginPage } /> }></Route>
                <Route path="*" element={ <Private isAuth={ logged } component={ DashboardRoutes } /> }></Route>
            </Routes>
        </Router>
    )
}
