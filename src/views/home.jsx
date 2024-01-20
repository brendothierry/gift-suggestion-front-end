import React from 'react';
import home from '../Images/home1.png';
import lupaIcon from '../Images/lupa-home.png';
import Navbar from '../components/Navbar';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/gs-home')
  }

  return (
    <div className='container-home'>
      <Navbar showButton={true} />

      <div className='texto'>
        <h1 className='titulo'> Presente Ideal ? </h1>
        <p className='texto-home'>
          Ele existe e podemos provar! Em todas as ocasiões para os mais diversos públicos.
        </p>
        <br></br>
        <button className='gift' onClick={handleClick}>
          <img src={lupaIcon} alt='lupa' style={{ width: '16px', marginRight: '10px' }} />
          Criar Presente Épico
        </button>
      </div>

      <img src={home} alt='home' />
    </div>
  );
}

export default Home;
