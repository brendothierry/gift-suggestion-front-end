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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
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
      </Routes>
    </BrowserRouter>
  )
}

export default App;