
import React from 'react';
import LogoImagem from '../../Images/logo.png';
import './styles.css';

class Navbar extends React.Component {
  render() {
    const { showButton } = this.props;

    return (
      <nav>
        <div className='line'>
          
          <div className='logo'>
            <img src={LogoImagem} alt='logo' />
          </div>

          {showButton && (
            <button className='navbar-button'> Criar Sugestão de Presente </button>
          )}
         
        </div>
      </nav>
    );
  }
}

export default Navbar;
