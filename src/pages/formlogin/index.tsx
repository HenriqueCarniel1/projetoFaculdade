import "./style.css";
import axios from "axios";
import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface FormLoginState {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  message: string;
}

function FormLogin() {
  const [formState, setFormState] = useState<FormLoginState>({
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
    message: ""
  });

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const validateForm = (): boolean => {
    let isValid = true;

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axios.post("https://api-projetofaculdade.onrender.com/send/login/user", {
        LoginEmail: formState.email,
        LoginPassword: formState.password
      });

      if (response.data.logado) {
        navigate("/");
      } else {
        setFormState((prevState) => ({
          ...prevState,
          message: response.data.user || "Email ou senha incorretos",
        }));
      }
    } catch (error) {
      setFormState((prevState) => ({
        ...prevState,
        message: "Falha no login, por favor tente novamente.",
      }));
    } finally {
      setLoading(false);
    }
  };

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
            <p style={{ color: formState.message.includes("incorretos") || formState.message.includes("Falha") ? 'red' : 'green' }}>
              {formState.message}
            </p>
          </div>
          <div id="criarconta-div-input">
            <a href='/formcreatelogin'>Criar conta</a>
          </div>
          <div id="botao-div">
            <button type="submit" id="botao" className="btn btn-primary" disabled={loading}>
              {loading ? (
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              ) : (
                "Enviar"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
