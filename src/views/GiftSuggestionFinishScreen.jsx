import React, { useEffect, useState } from 'react';
import finishDone from '../Images/finish-done.svg';
import Navbar from '../components/Navbar';
import './GiftSuggestionFinishScreen.css';
import Button from '../components/Button';
import { useNavigate, useLocation } from 'react-router';
import loading from '../Images/loading.gif.gif';
import { sendMessageToLlama } from '../services/userService';
import './GiftSuggestionScreen3.css';



const GiftSuggestionFinishScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const handleClickFinish = () => {
        navigate('/home')
    }
    const [suggestions, setSuggestions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [clienteData, setClienteData] = useState(location.state?.clienteData || {});

    useEffect(() => {
        const responseFromLLaMA = location.state && location.state.responseFromLlama;

        if (responseFromLLaMA) {
            const formattedSuggestions = responseFromLLaMA
                .split('\n')
                .filter(line => line.trim() !== '' && /^\d+\./.test(line))  // Regex para números seguidos de ponto
                .map(line => line.replace(/^\d+\.\s*/, ''));  // Remove o número e o ponto
            setSuggestions(formattedSuggestions);
        }
    }, [location.state, location.state.responseFromLlama]);


    const handleMoreSuggestions = async () => {
        setIsLoading(true);
        try {
            const mensagem = JSON.stringify(clienteData);
            const response = await sendMessageToLlama(mensagem);
            const newSuggestions = response
                .split('\n')
                .filter(line => line.trim() !== '' && /^\d+\./.test(line))
                .map(line => line.replace(/^\d+\.\s*/, ''));
            setSuggestions(prevSuggestions => [...prevSuggestions, ...newSuggestions]);
        } catch (error) {
            alert('Erro ao buscar mais sugestões');
            console.error('Erro no request', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return (
            <div className="loading-container">
                <img src={loading} alt="Loading..." className="loading-gif" />
                <p className="loading-text">Pelo visto você ainda está indeciso...</p>
                <p className="loading-text3">Lembre-se, o presente é só um gesto, mas o que realmente importa é o carinho e a intenção por trás dele. <br></br> Expressar esse sentimento torna qualquer presente especial.</p>
            </div>
        );
    }


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
                            height={55}
                            onClick={handleMoreSuggestions}>
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
                        {suggestions.map((suggestion, index) => (
                            <div key={index} className='suggestion-card'>
                                <div className='suggestion'>
                                    <span className='suggestion-index'>{index + 1}:</span>
                                    <span className='suggestion-content'>{suggestion}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiftSuggestionFinishScreen;