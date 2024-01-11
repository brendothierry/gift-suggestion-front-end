import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Login from '../views/Login';
import GiftSuggestion from '../views/GiftSuggestion';
import ForgotPassword from '../views/ForgotPassword';
import ResetPassword from '../views/ResetPassword';
import Onboarding from '../views/Onboarding';
import Home from '../views/Home';
import AboutUs from '../views/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/login" element={<Login />}>
        </Route>
        <Route path="/onboarding" element={<Onboarding />}>
        </Route>
        <Route path="/gs-home" element={<GiftSuggestion />}>
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />}>
        </Route>
        <Route path="/reset-password" element={<ResetPassword />}>
        </Route>
        <Route path="/home" element={<Home />}>
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;