import "./style.css";


function FormCreate() {

    return (
        <div id="container-login">
            <div id="container-form">
                <div id="titulo-div-input">
                    <h1>Cadrastro</h1>
                </div>
                <form className="formCreate">
                    <div id="nome-div-input">
                        <label>Nome:</label>
                        <input
                            type="text"
                            name="Nome"
                            placeholder="Digite seu nome"

                        />
                        <p id="emailverificated" style={{ color: 'red' }}>
                        </p>
                    </div>
                    <div id="email-div-input">
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Digite um email"

                        />
                        <p id="emailverificated" style={{ color: 'red' }}>
                        </p>
                    </div>
                    <div id="criar-senha-div-input">
                        <label>Criar senha:</label>
                        <input
                            type="text"
                            name="Criar senha"
                            placeholder="Crie sua senha"

                        />
                        <p id="criar-senhaverificated" style={{ color: 'red' }}>
                        </p>
                    </div>
                    <div id="confirmar-senha-div-input">
                        <label>Confirme sua senha:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Confirme sua senha"

                        />
                        <p id="onfirmar-senha-verificated" style={{ color: 'red' }}>
                        </p>
                    </div>
                    <div id="telefone-div-input">
                        <label>Telefone:</label>
                        <input
                            type="text"
                            name="telefone"
                            placeholder="Digite seu número de telefone"

                        />
                        <p id="telefoneverificated" style={{ color: 'red' }}>
                        </p>
                    </div>
                    <div id="mensagem-certo">
                    </div>

                    <div id="botao-div">
                        <button type="submit" id="botao">Criar conta</button>


                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormCreate;