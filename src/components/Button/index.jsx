import React from 'react'
import "./styles.css"

const Button = ({ label, onClick, children, width, height }) => {
    return (
        <div className="container-button">
            <div className="button-login" style={{ width: width, height: height }}>
                <button
                    type="button"
                    className="Login"
                    onClick={onClick}
                    style={{ width: width, height: height }}
                >
                    {label} {children} {/* Usa a propriedade label para definir o texto do bot�o */}
                </button>
            </div>
        </div>
    );
}

export default Button