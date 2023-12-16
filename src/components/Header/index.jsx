import React from 'react';
import './styles.css'; // Importe o arquivo CSS que contém os estilos
import logo from '../../Images/logo.svg';

const Header = () => {
    return (
      <div className="container">
        <div className="logo-container">
          <img className="logo-navbar" src={logo} alt="Logo" />
        </div>
      </div>
    );
  };
  
  export default Header;