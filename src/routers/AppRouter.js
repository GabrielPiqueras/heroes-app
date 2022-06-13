import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../components/login/LoginPage';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    
    return (
        <Router>
                <Routes>
                    <Route exact path="/login" element={ <LoginPage /> }></Route>
                    <Route path="*" element={ <DashboardRoutes /> }></Route>
                </Routes>
        </Router>
    )
}
