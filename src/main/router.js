import React from 'react'

import Home from '../views/home'

import { Route, Routes, HashRouter } from 'react-router-dom'
import Login from '../views/Login';

function MainRoute(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </HashRouter>
    )   
}

export default MainRoute;