import React from 'react';
import './AboutUs.css';
import Navbar from "../components/Navbar";
import vinicius from "../Images/vinicius.png";
import bettini from "../Images/bettini.png";
import thierry from "../Images/thierry.png";

class AboutUs extends React.Component {
    render() {
        return (
            <div className="container-navbar">
                <Navbar />
                <div className="container-header">
                    <h1>Quem Somos</h1>
                    <div className="fotos">
                        <div className="img-container">
                            <a href="https://www.linkedin.com/in/vinicius-oliveira-69517813a/">
                                <img src={vinicius} alt='imagem-perfil' />
                                
                            </a>
                        </div>
                        <div className="img-container">
                            <a href="https://www.instagram.com/bettinis_/">
                                <img src={bettini} alt='imagem-perfil' />
                                
                            </a>
                        </div>
                        <div className="img-container">
                            <a href="https://www.linkedin.com/in/brendo-thierry-do-nascimento-tavares-1088311a3/">
                                <img src={thierry} alt='imagem-perfil' />
                                
                            </a>
                        </div>
                        <p>
                            Numa tarde cheia de inspiração, um grupo diversificado de programadores se reuniu com o propósito claro de criar 
                            um site inovador. Cada membro, com habilidades únicas, contribuiu para a visão coletiva. Em meio a debates criativos,
                            enfrentaram desafios com determinação, resultando em um ambiente de colaboração que impulsionou o projeto para a frente.
                            Após semanas de trabalho árduo, o site nasceu - uma fusão de design elegante, funcionalidades poderosas e uma experiência 
                            do usuário excepcional. O lançamento não apenas representou a realização de uma visão compartilhada, mas também destacou o 
                            impacto positivo que a paixão pela programação e a colaboração podem ter no mundo digital.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
