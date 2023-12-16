import React from 'react';
import './ForgotPassworld.css';
import Header from "../components/Header";

class ForgotPassworld extends React.Component {
    render() {
        return (
        
            <div className="container-header">
                <Header></Header>
                <div className="container">
                    <div className="containerPage">
                        <div className="email">
                            <h1>Encontre sua conta</h1>
                            <p>Insira seu email ou número de celular para recuperar a sua conta.</p>
                            <label htmlFor="emailInput">Digite seu email</label>
                            <input type="email" id="emailInput" placeholder="Email ou número de celular" />
                            <button>Confirma</button>
                        </div>
                    </div>
                </div >
            </div>
        
        );
    }
}

export default ForgotPassworld;