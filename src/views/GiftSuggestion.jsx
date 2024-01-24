import React from 'react';
import Navbar from '../components/Navbar';
import './GiftSuggestion.css';
import AppContainer from '../components/GiftSuggestionModel';
import image from '../Images/tela-0-giftsuggestion-icon.svg'
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';


const GiftSuggestion = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/screen1')
    }

    return (
        <div className="gs-header">
            <Navbar></Navbar>
            <div className="gs-page">
                <div className="gs-container">
                    <AppContainer>
                        <div className="gs-content">
                            <img className="logo-home" src={image} />   
                            <div className="text-m1">
                                ESCOLHER UM PRESENTE SIGNIFICATIVO REQUER UM POUCO DE REFLEXÃO E CONSIDERAÇÃO.
                            </div>
                            <div className='text-m2'>
                                AQUI ESTÃO ALGUNS PONTOS-CHAVE PARA VOCÊ PENSAR AO ESCOLHER UM PRESENTE PARA ALGUÉM:
                            </div>
                            <div className='text-m3'>
                                SE PREPARE PARA O MELHOR
                            </div>
                                <Button onClick={handleClick} className="gs-button" label="Vamos lá!" ></Button>
                        </div>
                    </AppContainer>
                </div>
            </div>
        </div>
    );
}

export default GiftSuggestion;