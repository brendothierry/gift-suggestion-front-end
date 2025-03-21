import React from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import './EditProfile.css'
import { useNavigate } from 'react-router-dom';


const EditProfile = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home')
    }

    return (
        <div classname="container-profile">
            <Navbar showSidebar={false} />

            <div className="container-edit-profile">
                <div className="editprofile">

                    <div className="title">
                        <p>Perfil</p>
                    </div>

                    <div className="lista">
                        <p>Dados do Usuário</p>
                        <br></br>
                        <Input
                            placeholder="Novo email"
                            type="campo"
                        />
                    </div>

                    <div className="lista">
                        <Input
                            placeholder="Novo Telefone"
                            type="campo"
                        />
                    </div>

                    <div className="lista">
                        <p>Segurança</p>
                        <br></br>
                        <Input
                            placeholder="Senha antiga"
                            type="campo"
                        />
                    </div>
                    <div className="lista">
                        <Input
                            placeholder="Nova Senha"
                            type="campo"
                        />
                    </div>
                    

                    <div className="lista">
                        <Input
                            placeholder="Repetir Nova Senha"
                            type="campo"
                        />
                    </div>

                </div>
            </div>

            <div className="button-login">
                <Button label="Salvar Dados" onClick={handleClick} />
            </div>

        </div>
    );
};

export default EditProfile;