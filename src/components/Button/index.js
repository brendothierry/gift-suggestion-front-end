import React from 'react'
import "./styles.css"

    class Button extends React.Component{
        
        render() {
            const { label } = this.props; // Obtém a propriedade label do componente pai
            return (
              <div className="container">
                <div className="button-login">
                  <button type="button" onClick={this.login} className="Login">
                    {label} {/* Usa a propriedade label para definir o texto do botão */}
                  </button>
                </div>
              </div>
            );
          }
        }

export default Button