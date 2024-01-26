import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import './GiftSuggestionScreen1.css';
import { useNavigate } from 'react-router-dom';
import infoModel1 from '../Images/gs-info-model1.svg';
import infoModel2 from '../Images/gs-info-model2.svg';
import infoModel3 from '../Images/gs-info-model3.svg';
import info from '../Images/info-circle.svg';


const GiftSuggestionScreen1 = () => {

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/gs-home')
    }

    const handleClickNext = () => {
        navigate('/screen2', { state: { clienteData } })
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
        info0: 'Me dê 10 sugestões de presentes baseada nas seguintes características',
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
        const savedData = localStorage.getItem('clienteData');
        if (savedData) {
            setClienteData(JSON.parse(savedData));
        }
    }, []);


    return (
        <div className="container-navbar">
            <Navbar />
            <div className="container-gs-screen1">
                <div className="gs-screen1">
                    <div className="setInfo1">
                        <img src={infoModel1} className="img-info1" />
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
                            <p className="title-input">Idade e fase da vida</p>
                            <textarea
                                className="input-style"
                                type="campo"
                                onChange={(e) => handleChange(e, 'info1')}
                                value={clienteData.info1}
                            />
                        </div>
                    </div>


                    <div className="setInfo2">
                        <img src={infoModel2} className="img-info2" />
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
                            <p className="title-input">Interesses e Hobbies</p>
                            <textarea
                                className="input-style"
                                onChange={(e) => handleChange(e, 'info2')}
                                value={clienteData.info2}
                            />
                        </div>
                    </div>


                    <div className="setInfo3">
                        <img src={infoModel3} className="img-info3" />
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
                            <p className="title-input">Personalidade</p>
                            <textarea
                                width={500}
                                height={250}
                                className="input-style"
                                onChange={(e) => handleChange(e, 'info3')}
                                value={clienteData.info3}
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



export default GiftSuggestionScreen1;
