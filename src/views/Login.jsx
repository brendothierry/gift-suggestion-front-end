import React from 'react';
import InputLogin from '../components/InputLogin';
import Button from '../components/Button';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/gs-home')
    }
    return (
        <div className="container">
            {/* Adicione a imagem de fundo */}
            <div className="background-image">
            </div>
            <div className="form-container">
                <div className="image-logo" />
                <br></br>
                <h1>LOGIN</h1>
                <br></br>
                <p>Seja bem-vindo </p>
                <br></br>
                <InputLogin />
                <br></br>
                <br></br>
                <Link to="/forgot-password" className="forgot-password">Esqueceu sua senha?</Link>
                <Button label="Entrar" onClick={handleClick} />

                
            </div>
        </div>
    );
}

export default Login;
