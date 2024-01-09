import React from 'react';
import LogoImagem from '../../Images/logo.png'
import './styles.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className='line'>
          <div className='logo'>
            <img
              src={LogoImagem}
              alt='logo'
              href='<home></home>'
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
