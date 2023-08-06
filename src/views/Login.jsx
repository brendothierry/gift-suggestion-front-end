import React from 'react';
import InputLogin from '../components/InputLogin';
import Button from '../components/Button';
import './Login.css';


const Login = () => {
    return (
        <div className="container">
            <div className="login">               
                <div className="form-container">
                <div className="image-logo" />
                
                    <br></br>
                    <h1>LOGIN</h1>
                    <br></br>
                    <p>Seja bem-vindo </p>
                    <br></br>
                    <InputLogin />
                    <br></br>
                    <div className="forgot-password" > Esqueceu sua senha? </div>
                    <br></br>
                    <Button />

                    

                </div>
                <div className="image-teste" />
            </div>

        </div>
    );
}

export default Login;
