import React from 'react'

import Home from '../views/home'

import { Route, Routes, HashRouter } from 'react-router-dom'

function MainRoute(){
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </HashRouter>
    )   
}

export default MainRoute;