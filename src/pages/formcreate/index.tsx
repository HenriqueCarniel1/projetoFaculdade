import "./style.css";
import axios from "axios";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface FormData {
    nome: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    telefone: string;
    cpf: string;
    dataNascimento: string;
}

function FormCreate() {
    const [formData, setFormData] = useState<FormData>({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
        telefone: "",
        cpf: "",
        dataNascimento: ""
    });

    const [errorMessage, setErrorMessage] = useState<string>("");

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (formData.senha !== formData.confirmarSenha) {
            setErrorMessage("As senhas não coincidem");
            return;
        }

        try {
            const response = await axios.post("http://localhost:4000/send/register/user", {
                RegisterName: formData.nome,
                RegisterEmail: formData.email,
                RegisterPassword: formData.senha,
                telefone: formData.telefone,
                RegisterCpf: formData.cpf,
                RegisterDateOfBirth: formData.dataNascimento
            });

            if (response.data.Exist) {
                setErrorMessage(response.data.userEmailAlreadyExist);
            } else if (response.data.userInsert) {
                console.log("Usuário criado com sucesso!");
                setErrorMessage("");
                navigate("/");
            }
        } catch (error) {
            console.error("Erro ao criar usuário", error);
            setErrorMessage("Erro ao criar a conta. Tente novamente.");
        }
    };

    return (
        <div className="div-form-cadastro">
            <form className="form-cadastro" onSubmit={handleSubmit}>
                <div className="div-form-cadastro-title">
                    <h1>Cadastro</h1>
                </div>
                <div className="mb-3">
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite um email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Criar senha:</label>
                    <input
                        type="password"
                        name="senha"
                        placeholder="Crie sua senha"
                        value={formData.senha}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Confirme sua senha:</label>
                    <input
                        type="password"
                        name="confirmarSenha"
                        placeholder="Confirme sua senha"
                        value={formData.confirmarSenha}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Telefone:</label>
                    <input
                        type="text"
                        name="telefone"
                        placeholder="Digite seu número de telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>CPF:</label>
                    <input
                        type="text"
                        name="cpf"
                        placeholder="Digite seu CPF"
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label>Data de Nascimento:</label>
                    <input
                        type="date"
                        name="dataNascimento"
                        placeholder="Digite sua data de nascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <div id="botao-div">
                    <button id="botao" className="btn btn-primary w-100">Criar conta</button>
                </div>
            </form>
        </div>

    );
}

export default FormCreate;
