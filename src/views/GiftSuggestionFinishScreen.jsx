import React, { useEffect, useState } from 'react';
import finishDone from '../Images/finish-done.svg';
import Navbar from '../components/Navbar';
import './GiftSuggestionFinishScreen.css';
import Button from '../components/Button';
import { useNavigate, useLocation } from 'react-router';

const GiftSuggestionFinishScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const handleClickFinish = () => {
        navigate('/home')
    }
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const responseFromChatGPT = location.state && location.state.responseFromChatGPT;
        if (responseFromChatGPT) {
            const choices = responseFromChatGPT.choices || [];
            const suggestionsArray = choices.map((choice, index) => ({
                index: index + 1,
                content: choice.message.content
            }));
            setSuggestions(suggestionsArray);
        }
    }, [location.state, location.state.responseFromChatGPT]);

    return (
        <div className='container-navbar'>
            <Navbar />
            <div className='container-finish-screen'>
                <div className='container-done'>
                    <svg className='finish-style' xmlns="http://www.w3.org/2000/svg" width="600" height="600">
                        <image href={finishDone} width="100%" height="100%" />
                        <text className="text-inside-finish" dominantBaseline="middle">
                            Tudo pronto!
                        </text>
                        <text className='description-inside-finish' dominantBaseline="middle">
                            VAMOS VER A LISTA DE RESULTADOS
                        </text>
                        <text className='description2-inside-finish' dominantBaseline="middle">
                            IDEAL PARA VOCÊ!
                        </text>
                    </svg>
                    <div className='button-container'>
                        <Button
                            className="button-more-suggestions"
                            label="Me dê mais 10 sugestões!"
                            width={300}
                            height={55}>
                        </Button>
                        <Button
                            className="button-finish"
                            label="Estou satisfeito!"
                            width={300}
                            height={55}
                            onClick={handleClickFinish}
                        >
                        </Button>
                    </div>
                </div>
                <div className='container-results'>
                    <div className='side-panel'>
                        {suggestions.map((suggestion) => (
                            <div className='gpt-answer1'>
                                <text>{suggestion.index}: {suggestion.content}</text>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiftSuggestionFinishScreen;