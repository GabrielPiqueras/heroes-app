import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { LoginPage } from '../components/login/LoginPage';
import { DcPage } from '../components/dc/DcPage';
import { MarvelPage } from '../components/marvel/MarvelPage';

export const AppRouter = () => {
    
    return (
        <Router>
            <div>
                <Navbar />

                <Routes>
                    <Route exact path='/login' element={ <LoginPage /> }></Route>
                    <Route exact path='/dc' element={ <DcPage /> }></Route>
                    <Route exact path='/marvel' element={ <MarvelPage /> }></Route>
                    <Route exact path='/' element={ <MarvelPage /> }></Route>
                </Routes>
            </div>
        </Router>
    )
}
