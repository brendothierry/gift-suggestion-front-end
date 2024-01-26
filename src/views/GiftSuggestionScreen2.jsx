import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import './GiftSuggestionScreen1.css';
import { useLocation, useNavigate } from 'react-router-dom';
import infoModel4 from '../Images/gs-info-model4.svg';
import infoModel5 from '../Images/gs-info-model5.svg';
import infoModel6 from '../Images/gs-info-model6.svg';
import info from '../Images/info-circle.svg';


const GiftSuggestionScreen2 = () => {

    const navigate = useNavigate();
    const location = useLocation();


    const handleClickBack = () => {
        navigate('/screen1')
    }

    const handleClickNext = () => {
        navigate('/screen3', { state: { clienteData } })
    }


    const [modalsVisibility, setModalsVisibility] = useState({
        modal1: false,
        modal2: false,
        modal3: false,
    });

    const toggleModal = (modalName) => {
        setModalsVisibility((prevVisibility) => ({
            ...prevVisibility,
            [modalName]: !prevVisibility[modalName],
        }));
    };

    const [clienteData, setClienteData] = useState({
        info0: 'Me dê 10 sugestões de presentes baseada nas seguintes características. Irei fornecer especificações com as seguintes características respectivamente: Idade e fase da vida, Interesses e Hobbies, Personalidade, Ocasião, Relação com a pessoa, Memórias compartilhadas, Desejos, Tendências e novidades do momento, e Orçamento que é uma base.',
        info1: '',
        info2: '',
        info3: '',
        info4: '',
        info5: '',
        info6: '',
        info7: '',
        info8: '',
        info9: ''
    });


    const handleChange = (event, fieldName) => {
        const newValue = event.target.value;
        setClienteData((prevData) => {
            const newData = {
                ...prevData,
                [fieldName]: newValue,
            };
            localStorage.setItem('clienteData', JSON.stringify(newData));
            return newData;
        });
    };

    useEffect(() => {
        if (location.state && location.state.clienteData) {
            setClienteData(location.state.clienteData);
        }
    }, [location.state, navigate]);


    return (
        <div className="container-navbar">
            <Navbar />
            <div className="container-gs-screen1">
                <div className="gs-screen1">
                    <div className="setInfo1">
                        <img src={infoModel4} className="img-info1" />
                        <div className="input-container">
                            <div className="info-wrapper">
                                <img
                                    src={info}
                                    className="info-icon1"
                                    onClick={() => toggleModal('modal1')}
                                />
                                {modalsVisibility.modal1 && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <p>Seu texto estático aqui</p>
                                            <button onClick={() => toggleModal('modal1')} className="close-button">
                                                Fechar
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className="title-input">Ocasião</p>
                            <textarea
                                className="input-style"
                                type="campo"
                                onChange={(e) => handleChange(e, 'info4')}
                                value={clienteData.info4}
                            />
                        </div>
                    </div>


                    <div className="setInfo2">
                        <img src={infoModel5} className="img-info2" />
                        <div className="input-container">
                            <div className="info-wrapper">
                                <img
                                    src={info}
                                    className="info-icon2"
                                    onClick={() => toggleModal('modal2')}
                                />
                                {modalsVisibility.modal2 && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <p>Seu texto estático aqui</p>
                                            <button onClick={() => toggleModal('modal2')} className="close-button">
                                                Fechar
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className="title-input">Relação</p>
                            <textarea
                                className="input-style"
                                onChange={(e) => handleChange(e, 'info5')}
                                value={clienteData.info5}
                                />
                        </div>
                    </div>


                    <div className="setInfo3">
                        <img src={infoModel6} className="img-info3" />
                        <div className="input-container">
                            <div className="info-wrapper">
                                <img
                                    src={info}
                                    className="info-icon3"
                                    onClick={() => toggleModal('modal3')}
                                />
                                {modalsVisibility.modal3 && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <p>Seu texto estático aqui</p>
                                            <button onClick={() => toggleModal('modal3')} className="close-button">
                                                Fechar
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className="title-input">Memórias Compartilhadas</p>
                            <textarea
                                width={500}
                                height={250}
                                className="input-style"
                                onChange={(e) => handleChange(e, 'info6')} 
                                value={clienteData.info6}
                                />
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-container">
                <div className="button-back">
                    <Button label="Voltar" onClick={handleClickBack} />
                </div>

                <div className="button-next">
                    <Button label="Próximo" onClick={handleClickNext} />
                </div>
            </div>
        </div>

    );
};



export default GiftSuggestionScreen2;