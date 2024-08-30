import "./style.css"
import axios from "axios";
import React, { useState, FormEvent } from "react";
import "./style.css";

// Define os tipos para o estado do componente
interface FormLoginState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  message: string;
}

function FormLogin() {
  // Define o estado do componente com a tipagem FormLoginState
  const [formState, setFormState] = useState<FormLoginState>({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    message: ""
  });

  // Função para validar o formulário
  const validateForm = (): boolean => {
    let isValid = true;

    // Validação do email
    if (!formState.email.includes("@") || !formState.email.includes(".")) {
      setFormState((prevState) => ({
        ...prevState,
        emailError: "Email inválido",
      }));
      isValid = false;
    } else {
      setFormState((prevState) => ({
        ...prevState,
        emailError: "",
      }));
    }

    // Validação da senha
    if (formState.password.length < 6) {
      setFormState((prevState) => ({
        ...prevState,
        passwordError: "Senha deve ter pelo menos 6 caracteres",
      }));
      isValid = false;
    } else {
      setFormState((prevState) => ({
        ...prevState,
        passwordError: "",
      }));
    }

    return isValid;
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validar o formulário antes de enviar
    if (!validateForm()) return;

    try {
      // Enviar os dados para o backend
      const response = await axios.post("/login", {
        LoginEmail: formState.email,
        LoginPassword: formState.password
      });

      console.log(response)

      // Definir mensagem de sucesso
      setFormState((prevState) => ({
        ...prevState,
        message: "Login bem-sucedido!",
      }));
    } catch (error) {
      // Definir mensagem de erro
      setFormState((prevState) => ({
        ...prevState,
        message: "Falha no login, por favor tente novamente.",
      }));
    }
  };

  // Função para atualizar o estado dos campos
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div id="container-login">
      <div id="container-form">
        <div id="titulo-div-input">
          <h1>Login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div id="email-div-input">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Digite um email"
              value={formState.email}
              onChange={handleChange}
            />
            <p id="emailverificated" style={{ color: 'red' }}>
              {formState.emailError}
            </p>
          </div>
          <div id="senha-div-input">
            <label>Senha:</label>
            <input
              type="password"
              name="password"
              placeholder="Digite uma senha"
              value={formState.password}
              onChange={handleChange}
            />
            <p id="senhaverificated" style={{ color: 'red' }}>
              {formState.passwordError}
            </p>
          </div>
          <div id="mensagem-certo">
            <p style={{ color: 'green' }}>{formState.message}</p>
          </div>
          <div id="criarconta-div-input">
            <a href='/formcreatelogin'>Criar conta</a>
          </div>
          <div id="botao-div">
            <button type="submit" id="botao">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
