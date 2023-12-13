import React from 'react'
import './App.css';
import MainRoute from './router';
import Home from '../views/home';
import Header from '../components/Header';
import Login from '../views/Login';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    )
  }
}
export default App;
