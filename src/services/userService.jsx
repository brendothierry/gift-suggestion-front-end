import React from "react";
import axios from "axios";


const UpdateCliente = async (clienteData) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/gift-suggestion/gs/create-cliente`, clienteData
        );
        return response.data
    } catch (error) {
        throw error;
        console.error('Erro ao atualizar cliente:', error);
    }
};

const Login = async (clienteData) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/gift-suggestion/gs/login`, clienteData
        );
        if(response.status == 200){
        return response.data
        }
    } catch (error) {
        throw error;
        console.error('Erro ao atualizar cliente:', error);
    }
};


export default { UpdateCliente, Login };