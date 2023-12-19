import React from 'react';
import home from '../Images/home.png';
import lupaIcon from '../Images/lupa.png';
import Navbar from '../components/Navbar';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className='container'>
        
        <Navbar showButton={true} />

        <div className='texto'>
          <h1 className='titulo'> Presente Ideal ? </h1>
          <p className='texto-home'>
            Ele existe e podemos provar! Em todas as ocasiões para os mais diversos públicos.
          </p>
          <br></br>
          <button className='gift'>
            <img src={lupaIcon} alt='lupa' style={{ width: '16px', marginRight: '10px' }} />
            Criar Presente Épico
          </button>
        </div>

        <img src={home} alt='home' />
      </div>
    );
  }
}

export default Home;
