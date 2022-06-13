import React from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import { DcPage } from "../components/dc/DcPage";
import { HeroPage } from "../components/heroes/HeroPage";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
    
    return (
        <>
            <Navbar />

            <div className='container mt-3'>
                <Routes>
                    <Route exact path="/marvel" element={ <MarvelPage /> }></Route>
                    <Route exact path="/dc" element={ <DcPage /> }></Route>
                    <Route exact path="/heroe/:heroId" element={ <HeroPage /> }></Route>
                
                    <Route path="*" element={ <Navigate to="/marvel" replace /> }></Route>
                </Routes>
            </div>
        </>
    )
}
