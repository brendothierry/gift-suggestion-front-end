import React, {useState} from 'react';
import InputLogin from '../components/InputLogin';
import Button from '../components/Button';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../services/userService';

const Login = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home')
    }

    const [clienteData, setClienteData] = useState({
        email: '',
        senha: '',
    });

    const handleLogin = async () => {
        try {
            const result = await userService.Login(clienteData);
            alert('Login realizado com sucesso!');
            handleClick();
        } catch (error) {
            alert('Email ou senha incorretos');
            console.error('Erro no login', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClienteData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    return (
        <div className="container">
            {/* Adicione a imagem de fundo */}
            <div className="background-image">
            </div>
            <div className="form-container">
                <div className="image-logo" />
                <br></br>
                <h1>LOGIN</h1>
                <p>Seja bem-vindo </p>
                <br></br>
                <InputLogin 
                placeholder="Email"
                type="email"
                name="email"
                value={clienteData.email}
                onChange={handleChange}/>
                <br></br>
                <InputLogin 
                placeholder="Senha"
                type="senha"
                name="senha"
                value={clienteData.senha}
                onChange={handleChange}/>
                <br></br>
                <Link to="/onboarding" className="create-account">Crie sua conta!</Link>
                <Link to="/forgot-password" className="forgot-password">Esqueceu sua senha?</Link>
                <Button label="Entrar" onClick={handleLogin} />
            </div>
        </div>
    );
}

export default Login;
