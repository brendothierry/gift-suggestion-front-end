import React, { useState } from 'react';
import Header from "../components/Header";
import './ResetPassword.css';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = () => {
       
        if (newPassword !== confirmPassword) {
            setError('As senhas não coincidem.');
        } else {

            setError('');
        }
    };

    return (
        <div className="header">
            <Header />
            <div className="container">
                <div className="containerPage">
                    <h2 className="container-header">Redefinir Senha</h2>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <br></br>
                    <label htmlFor="newPassword">Nova Senha:</label>
                    <input
                        type="password"
                        id="newPassword"
                        name="newPassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="email-input"
                        required
                    />
                    <label htmlFor="confirmPassword">Confirmar Senha:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="email-input"
                        required
                    />
                    <button className="email-button" onClick={handleResetPassword}>
                        Redefinir Senha
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
