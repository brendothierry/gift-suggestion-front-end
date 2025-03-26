import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import GiftSuggestion from '../views/GiftSuggestion';
import Home from '../views/Home';
import GiftSuggestionScreen1 from '../views/GiftSuggestionScreen1';
import GiftSuggestionScreen2 from '../views/GiftSuggestionScreen2';
import GiftSuggestionScreen3 from '../views/GiftSuggestionScreen3';
import GiftSuggestionFinishScreen from '../views/GiftSuggestionFinishScreen';
import AboutUs from '../views/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/gs-home" element={<GiftSuggestion />}>
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
        </Route>
        <Route path="/home" element={<Home />}>
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