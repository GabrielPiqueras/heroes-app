import React, { useContext } from "react"
import { Routes, Route, Navigate } from "react-router-dom";
import { DcPage } from "../components/dc/DcPage";
import { HeroPage } from "../components/heroes/HeroPage";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { Navbar } from "../components/ui/Navbar";
import { SearchPage } from "../components/search/SearchPage";
import { AuthContext } from "../auth/AuthContext";

/* Muestra el Navbar y las rutas para cuando el usuario ha iniciado sesión, es decir, las rutas de la parte del "Dashboard".
   Si la ruta introducida no existe, cae en la expresión regular '*' y se redirige a '/marvel' */

export const DashboardRoutes = () => {
    
    // const authContext = useContext(AuthContext);
    // const { user } = authContext;
    // console.log(user);   

    return (
        <>
            <Navbar />

            <div className='container mt-3'>
                <Routes>
                    <Route exact path="/marvel" element={ <MarvelPage /> }></Route>
                    <Route exact path="/dc" element={ <DcPage /> }></Route>
                    <Route exact path="/search" element={ <SearchPage /> }></Route>
                    <Route exact path="/hero/:heroId" element={ <HeroPage /> }></Route>
                
                    <Route path="*" element={ <Navigate to="/marvel" replace /> }></Route>
                </Routes>
            </div>
        </>
    )
}
