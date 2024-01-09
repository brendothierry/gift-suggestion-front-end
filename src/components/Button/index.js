import React from 'react'
import "./styles.css"

class Button extends React.Component {

  render() {
    const { label } = this.props;
    const { onClick, children } = this.props; // Obt�m a propriedade label do componente pai
    return (
      <div className="container-button">
        <div className="button-login">
          <button type="button" className="Login" onClick={onClick}>
            {label} {children} {/* Usa a propriedade label para definir o texto do bot�o */}
          </button>
        </div>
      </div>
    );
  }
}

export default Button