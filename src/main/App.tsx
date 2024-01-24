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
import EditProfile from '../views/EditProfile';
import GiftSuggestionScreen1 from '../views/GiftSuggestionScreen1';
import GiftSuggestionScreen2 from '../views/GiftSuggestionScreen2';
import GiftSuggestionScreen3 from '../views/GiftSuggestionScreen3';
import GiftSuggestionFinishScreen from '../views/GiftSuggestionFinishScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
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
        <Route path="/edit-profile" element={<EditProfile />}>
        </Route>
        <Route path="/screen1" element={<GiftSuggestionScreen1 />}>
        </Route>
        <Route path="/screen2" element={<GiftSuggestionScreen2 />}>
        </Route>
        <Route path="/screen3" element={<GiftSuggestionScreen3 />}>
        </Route>
        <Route path="/finish-screen" element={<GiftSuggestionFinishScreen />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;