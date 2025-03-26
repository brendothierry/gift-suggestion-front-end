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
                        <p>
                            O Gift Suggestion surgiu para ajudar você a encontrar o presente ideal para qualquer pessoa e ocasião. Nossa equipe é formada por três estudantes de Desenvolvimento de Software, que se juntaram para criar uma solução que facilitasse a vida de quem assim como nós, não é indeciso para presentear, apenas deseja encontrar o presente perfeito.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
