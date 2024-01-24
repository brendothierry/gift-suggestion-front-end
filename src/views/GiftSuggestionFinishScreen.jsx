import React from 'react';
import finishDone from '../Images/finish-done.svg';
import Navbar from '../components/Navbar';
import './GiftSuggestionFinishScreen.css';
import Button from '../components/Button';
import { useNavigate } from 'react-router';

const GiftSuggestionFinishScreen = () => {

    const navigate = useNavigate();
    const handleClickFinish = () => {
         navigate('/home')
    }

    return (
        <div className='container-navbar'>
            <Navbar />
            <div className='container-finish-screen'>
                <div className='container-done'>
                    {/* <img src={finishDone}
                        className='finish-style'
                    /> */}
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
                        <div className='gpt-answer1'>
                            <text className='answer1'>1:</text>
                        </div>
                        <div className='gpt-answer2'>
                            <text>2:  </text>
                        </div>
                        <div className='gpt-answer3'>
                            <text className='answer1'>3:</text>
                        </div>
                        <div className='gpt-answer4'>
                            <text>4:</text>
                        </div>
                        <div className='gpt-answer5'>
                            <text className='answer1'>5:</text>
                        </div>
                        <div className='gpt-answer6'>
                            <text>6:</text>
                        </div>
                        <div className='gpt-answer7'>
                            <text className='answer1'>7:</text>
                        </div>
                        <div className='gpt-answer8'>
                            <text>8:</text>
                        </div>
                        <div className='gpt-answer9'>
                            <text className='answer1'>9:</text>
                        </div>
                        <div className='gpt-answer10'>
                            <text>10:</text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GiftSuggestionFinishScreen;