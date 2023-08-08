import React from 'react'
import './App.css';
import MainRoute from './router';
import Home from '../views/home';
import Header from '../components/Header';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <MainRoute/>
      </div>
    )
  }
}
export default App;
