import "./formcreatelogin.css"

function FormCreateLogin() {
    return (
        <div id="container">
        <div id="container-form">
          <div id="titulo-div-input">
            <h1>Login</h1>
          </div>

          <div id="cpf-div-input">
            <label>Nome:</label>
            <input type="text" placeholder="Digite seu Nome e sobrenome"></input>
            <p id="nomeverificated" style={{color: 'red'}}></p>
          </div>

          <div id="email-div-input">
            <label>Email:</label>
            <input type="text" placeholder="Digite um email" ></input>
            <p id="emailverificated" style={{color: 'red'}}></p>
          </div>

          <div id="senha-div-input">
            <label> Criar Senha:</label>
            <input type="text" placeholder="Digite uma senha"></input>
            <p id="senhaverificated" style={{color: 'red'}}></p>
          </div>

          <div id="confirmar-senha">
            <label> Confirme sua Senha:</label>
            <input type="text" placeholder="Senha"></input>
            <p id="confirmar-senhaverificated" style={{color: 'red'}}></p>
          </div>

          <div id="telefone-div-input">
            <label>Telefone:</label>
            <input type="text" placeholder="Digite seu Número"></input>
            <p id="telefoneverificated" style={{color: 'red'}}></p>
          </div>

          
          <div id="botao-div">
          <button id="botao">Continuar</button>
          </div>
          <div id="mensagem-certo">
          <p style={{color: 'green'}}></p>
          </div>
        </div>
      </div>
    );
}

export default FormCreateLogin;