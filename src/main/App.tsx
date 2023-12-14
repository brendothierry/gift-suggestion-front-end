import React from 'react'
import './App.css';
import MainRoute from './router';
import Home from '../views/Home';
import Header from '../components/Header';
import Login from '../views/Login';
import Onboarding from '../views/Onboarding';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Onboarding></Onboarding>
      </div>
    )
  }
}
export default App;
