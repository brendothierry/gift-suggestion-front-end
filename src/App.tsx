import React from 'react'
import './App.css'
import Button from './components/Button';
import Header from './components/Header';
import InputLogin from './components/InputLogin';
import Login from './views/Login';
import Onbording from './views/Onboarding';


function App() {
  return (
    <div className="App">
      <Onbording></Onbording>
    </div>
  );
}

export default App;
