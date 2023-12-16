import React from 'react';
import Header from '../components/Header';
import './GiftSuggestion.css';
import AppContainer from '../components/GiftSuggestionModel';
import image from '../Images/image.svg'
import Button from '../components/Button';

const GiftSuggestion = () => {
    return (
        <div className="gs-header">
            <Header></Header>
            <div className="gs-page">
                <div className="gs-container">
                    <AppContainer>
                        <div className="gs-content">
                            <img className="logo-home" src={image} />
                            <div className="animated-text">
                                CLARO, ESCOLHER UM PRESENTE SIGNIFICATIVO REQUER UM POUCO DE REFLEXÃO E CONSIDERAÇÃO.
                                <br></br>
                                AQUI ESTÃO ALGUNS PONTOS-CHAVE PARA VOCÊ PENSAR AO ESCOLHER UM PRESENTE PARA ALGUÉM:
                            </div>
                                <Button className="gs-button" label="Vamos lá!"></Button>
                        </div>
                    </AppContainer>
                </div>
            </div>
        </div>
    );
}

export default GiftSuggestion;