
import React from 'react';
import LogoImagem from '../../Images/logo.png';
import './styles.css';
import IconUser from '../../Images/IconUser.svg'

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
            <button className='sugestao'> Criar Sugestão de Presente </button>
          )}
           {showButton && (
            <button className='sobre-nos'> Sobre nós </button>
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
}

export default Navbar;
