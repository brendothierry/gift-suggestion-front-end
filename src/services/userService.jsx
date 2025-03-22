import React from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";


const UpdateCliente = async (clienteData) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/gift-suggestion/gs/create-cliente`, clienteData
        );
        if (response.status == 200) {
            return response.data
        }
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
        if (response.status == 200) {
            return response.data
        }
    } catch (error) {
        throw error;
        console.error('Erro ao atualizar cliente:', error);
    }
};

const RequestChatGPT = async (mensagem) => {
    try {
        const response = await axios.post(
            `http://localhost:8080/gift-suggestion/gs/obterRespostaDoChatGPT`, mensagem
        );
        if (response.status == 200) {
            return response.data
        }
    } catch (error) {
        throw error;
        console.error('Erro ao atualizar cliente:', error);
    }
};
export const sendMessageToLlama = async (mensagem) => {
    try {
      const response = await axios.post("http://localhost:11434/api/generate", {
        model: "llama3",
        prompt: `${mensagem}\nPor favor, responda em português.`,
        stream: false,
      });
      console.log(response.data)
      return response.data.response.toString();
    } catch (error) {
      throw new Error("Erro ao gerar resposta do LLaMA 3");
    }
  };


export default { UpdateCliente, Login };