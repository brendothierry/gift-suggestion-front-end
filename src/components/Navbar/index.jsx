
import React from 'react';
import LogoImagem from '../../Images/logo.png';
import './styles.css';
import IconUser from '../../Images/IconUser.svg'
import { useNavigate } from 'react-router-dom';


const Navbar = ({ showButton, onClick }) => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/home')
  }

  const handleClickGiftSuggestion = () => {
    navigate('/gs-home')
  }

  const handleClickAboutUs = () => {
    navigate('/about-us')
  }

  return (
    <nav>
      <div className='line'>

        <div className='logo'>
          <img src={LogoImagem} alt='logo' onClick={handleClickHome} />
        </div>

        {showButton && (
          <button className='sugestao' onClick={handleClickGiftSuggestion}> Criar Sugestão de Presente </button>
        )}
        {showButton && (
          <button className='sobre-nos' onClick={handleClickAboutUs}> Sobre nós </button>
        )}
        {showButton && (
          <button className='icone'>
            <img src={IconUser} alt='icone' />
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
