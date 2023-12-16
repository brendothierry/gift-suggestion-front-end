import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import './Onboarding.css'


const Onboarding = () => {
  return (
    <div classname="container-header">
      <div classname="container-header">
        <div classname="Header">
          <Navbar showSidebar={false}/>
        </div>

        <div className="container">
          <div className="onboarding">

            <div className="title">
              <p>Criar Conta</p>
            </div>

            <div className="column">

              <div className="lista">
                <p>Email</p>
                <Input placeholder="Email" />
              </div>

              <div className="lista">
                <p>CPF</p>
                <Input placeholder="999.999.999-99" />
              </div>

              <div className="lista">
                <p>Data de Nascimento</p>
                <Input placeholder="DD/MM/YYYY" />
              </div>

              <div className="lista">
                <p>Senha</p>
                <Input placeholder="Senha" />
              </div>
            </div>

            <div className="column">
              <div className="lista">
                <p>Login</p>
                <Input placeholder="Login" />
              </div>

              <div className="lista">
                <p>Nome</p>
                <Input placeholder="Nome Completo" />
              </div>

              <div className="lista">
                <p>Celular</p>
                <Input placeholder="(99)99999-9999" />
              </div>

              <div className="lista">
                <p>Confirmar Senha</p>
                <Input placeholder="Repetir senha" />
              </div>

            </div>

            <div className="button-login"> {/* Div para o bot�o */}
              <Button label="Salvar dados" />
            </div>

          </div>
        </div>
      </div>
    </div>

  );
};



export default Onboarding;
