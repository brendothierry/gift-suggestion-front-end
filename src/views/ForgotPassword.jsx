import React from 'react';
import './ForgotPassword.css';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

const ForgotPassworld = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/reset-password')
    }
    return (

        <div className="header">
            <Navbar />
            <div className="container-fp">
                <div className="containerPage-fp">
                    <div className="email-fp">
                        <h1>Encontre sua conta</h1>
                        <p>Insira seu email ou número de celular para recuperar a sua conta.</p>
                        <label htmlFor="emailInput-fp">Digite seu email</label>
                        <input type="email-fp" id="emailInput-fp" placeholder="Email ou número de celular" />
                        <button onClick={handleClick}>Confirma</button>
                    </div>
                </div>
            </div >
        </div>

    );
}

export default ForgotPassworld;