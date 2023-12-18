import React from 'react'
import Home from '../views/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Login from '../views/Login';
import GiftSuggestion from '../views/GiftSuggestion';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/gs-home" element={<GiftSuggestion />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;