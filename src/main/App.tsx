import React from 'react'
import './App.css';
import MainRoute from './router';
import Home from '../views/Home';
import Header from '../components/Navbar';
import Login from '../views/Login';
import Onboarding from '../views/Onboarding';
import GiftSuggestion from '../views/GiftSuggestion';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <GiftSuggestion></GiftSuggestion>
      </div>
    )
  }
}
export default App;
