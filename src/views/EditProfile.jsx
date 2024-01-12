import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import './editprofile.css'


const EditProfile = () => {
    return (
        <div classname="container-header">
            <div classname="container-header">
                <div className="Header">
                    <Navbar showSidebar={false} />
                </div>

                <div className="container-edit-profile">
                    <div className="editprofile">

                        <div className="title1">
                            <p>Perfil</p>
                        </div>

                        <div className="lista">
                        <p>Dados do Usuário</p>
                            <Input placeholder="Novo Email" />
                            <br></br>
                        </div>                       

                        <div className="lista">
                            <Input placeholder="Senha Antiga" />
                        </div>

                        <div className="lista">
                            <Input placeholder="Novo Telefone" />
                        </div>

                        <div className="lista">
                            <p>Segurança</p>
                            <Input placeholder="Nova Senha" />
                            <br></br>
                        </div>

                        <div className="lista">
                            <Input placeholder="Repetir Nova Senha" />
                        </div>

                    </div>
                </div>

                <div className="button-login"> {/* Div para o bot�o */}
                    <Button label="Salvar Dados" />
                </div>

            </div>
        </div>

    );
};

export default EditProfile;