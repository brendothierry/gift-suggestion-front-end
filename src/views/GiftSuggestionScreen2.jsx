import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import './GiftSuggestionScreen1.css';
import { useNavigate } from 'react-router-dom';
import infoModel4 from '../Images/gs-info-model4.svg';
import infoModel5 from '../Images/gs-info-model5.svg';
import infoModel6 from '../Images/gs-info-model6.svg';
import info from '../Images/info-circle.svg';


const GiftSuggestionScreen2 = () => {

    const navigate = useNavigate();

    const handleClickBack = () => {
        navigate('/screen1')
    }

    const handleClickNext = () => {
        navigate('/screen3')
    }

    const [clienteData, setClienteData] = useState({
        info1: '',
        info2: '',
        info3: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClienteData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [modal1Visible, setModal1Visible] = useState(false);

    const toggleModal1 = () => {
        setModal1Visible(!modal1Visible);
    };

    const [modal2Visible, setModal2Visible] = useState(false);

    const toggleModal2 = () => {
        setModal2Visible(!modal2Visible);
    };

    const [modal3Visible, setModal3Visible] = useState(false);

    const toggleModal3 = () => {
        setModal3Visible(!modal3Visible);
    };

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
                                    onClick={toggleModal1}
                                />
                                {modal1Visible && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <p>Seu texto estático aqui</p>
                                            <button onClick={toggleModal1} className="close-button">
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
                                onChange={handleChange}
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
                                    onClick={toggleModal2}
                                />
                                {modal2Visible && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <p>Seu texto estático aqui</p>
                                            <button onClick={toggleModal2} className="close-button">
                                                Fechar
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <p className="title-input">Relação</p>
                            <textarea
                                className="input-style"
                                onChange={handleChange} />
                        </div>
                    </div>


                    <div className="setInfo3">
                        <img src={infoModel6} className="img-info3" />
                        <div className="input-container">
                            <div className="info-wrapper">
                                <img
                                    src={info}
                                    className="info-icon3"
                                    onClick={toggleModal3}
                                />
                                {modal3Visible && (
                                    <div className="modal">
                                        <div className="modal-content">
                                            <p>Seu texto estático aqui</p>
                                            <button onClick={toggleModal3} className="close-button">
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
                                onChange={handleChange} />
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
