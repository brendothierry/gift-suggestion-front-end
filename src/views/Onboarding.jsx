import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import './Onboarding.css'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import userService from "../services/userService";

const Onboarding = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login')
  }

  const [clienteData, setClienteData] = useState({
    celular: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    nome: '',
    login: '',
    senha: '',
    confirmaSenha: '',
  });

  const handleUpdateCliente = async () => {
    try {
      const result = await userService.UpdateCliente(clienteData);
      alert('Cliente cadastrado com sucesso!');
      handleClick();
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
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
    <div classname="container-header">
      <Navbar />
      <div className="container-onboarding">
        <div className="onboarding">

          <div className="title">
            <p>Criar Conta</p>
          </div>

          <div className="column">

            <div className="lista">
              <p>Email</p>
              <Input
                placeholder="Email"
                type="campo"
                name="email"
                value={clienteData.email}
                onChange={handleChange} />
            </div>

            <div className="lista">
              <p>CPF</p>
              <Input
                placeholder="999.999.999-99"
                type="campo"
                name="cpf"
                value={clienteData.cpf}
                onChange={handleChange} />
            </div>

            <div className="lista">
              <p>Data de Nascimento</p>
              <Input
                placeholder="DD/MM/YYYY"
                type="campo"
                name="dataNascimento"
                value={clienteData.dataNascimento}
                onChange={handleChange} />
            </div>

            <div className="lista">
              <p>Senha</p>
              <Input
                placeholder="Senha"
                type="campo"
                name="senha"
                value={clienteData.senha}
                onChange={handleChange} />
            </div>
          </div>

          <div className="column">
            <div className="lista">
              <p>Login</p>
              <Input
                placeholder="Login"
                type="campo"
                name="login"
                value={clienteData.login}
                onChange={handleChange} />
            </div>

            <div className="lista">
              <p>Nome</p>
              <Input
                placeholder="Nome Completo"
                type="campo"
                name="nome"
                value={clienteData.nome}
                onChange={handleChange} />
            </div>

            <div className="lista">
              <p>Celular</p>
              <Input
                placeholder="(99)99999-9999"
                type="campo"
                name="celular"
                value={clienteData.celular}
                onChange={handleChange} />
            </div>

            <div className="lista">
              <p>Confirmar Senha</p>
              <Input
                placeholder="Repetir senha"
                type="campo"
                name="confirmaSenha"
                value={clienteData.confirmaSenha}
                onChange={handleChange} />
            </div>

          </div>

          <div className="button-login">
            <Button label="Salvar dados" onClick={handleUpdateCliente} />
          </div>

        </div>
      </div>
    </div>

  );
};



export default Onboarding;
