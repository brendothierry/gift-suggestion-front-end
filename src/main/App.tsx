import React from 'react'
import Home from '../views/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Login from '../views/Login';
import GiftSuggestion from '../views/GiftSuggestion';
import ForgotPassword from '../views/ForgotPassword';
import ResetPassword from '../views/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/gs-home" element={<GiftSuggestion />}>
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;