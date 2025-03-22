import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import './GiftSuggestionScreen1.css';
import { useLocation, useNavigate } from 'react-router-dom';
import infoModel7 from '../Images/gs-info-model7.svg';
import infoModel8 from '../Images/gs-info-model8.svg';
import infoModel9 from '../Images/gs-info-model9.svg';
import info from '../Images/info-circle.svg';
import userService from '../services/userService';
import { sendMessageToLlama  } from '../services/userService';


const GiftSuggestionScreen3 = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [responseFromLlama, setResponseFromLlama] = useState(null);



    const handleClickBack = () => {
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

    useEffect(() => {
        if (responseFromLlama !== null) {
          const requestData = clienteData;
          localStorage.clear();
          if (clienteData.info7 !== '' && clienteData.info8 !== '' && clienteData.info9 !== '') {
            alert('Requisição realizada com sucesso');
            navigate('/finish-screen', { state: { clienteData: requestData, responseFromLlama } });
            console.log('XXXXXXXXX:', clienteData);
          } else {
            alert('Preencher todos os campos');
          }
        }
      }, [responseFromLlama, clienteData]);
    

      const handleRequestLlama = async () => {
        const mensagem = JSON.stringify(clienteData);
        try {
          if (clienteData.info7 !== '' && clienteData.info8 !== '' && clienteData.info9 !== '') {
            const response = await sendMessageToLlama(mensagem);
            setResponseFromLlama(response);
            alert('Requisição realizada com sucesso');
          } else {
            alert('Preencher todos os campos');
          }
        } catch (error) {
          alert('Request error');
          console.error('Erro no request', error);
        }
      };

    return (
        <div className="container-navbar">
            <Navbar />
            <div className="container-gs-screen1">
                <div className="gs-screen1">
                    <div className="setInfo1">
                        <img src={infoModel7} className="img-info1" />
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
                            <p className="title-input">Desejos</p>
                            <textarea
                                className="input-style"
                                type="campo"
                                onChange={(e) => handleChange(e, 'info7')}
                                value={clienteData.info7}
                            />
                        </div>
                    </div>


                    <div className="setInfo2">
                        <img src={infoModel8} className="img-info2" />
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
                            <p className="title-input">Tendências e novidades</p>
                            <textarea
                                className="input-style"
                                onChange={(e) => handleChange(e, 'info8')}
                                value={clienteData.info8}
                            />
                        </div>
                    </div>


                    <div className="setInfo3">
                        <img src={infoModel9} className="img-info3" />
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
                            <p className="title-input">Orçamento</p>
                            <textarea
                                width={500}
                                height={250}
                                className="input-style"
                                onChange={(e) => handleChange(e, 'info9')}
                                value={clienteData.info9}
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
                    <Button label="Finalizar!" onClick={handleRequestLlama} />
                </div>
            </div>
        </div>

    );
};



export default GiftSuggestionScreen3;
