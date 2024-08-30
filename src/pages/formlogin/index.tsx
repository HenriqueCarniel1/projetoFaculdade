import "./style.css"

function FormLogin() {
    return (
        <div id="container-login">
        <div id="container-form">
          <div id="titulo-div-input">
            <h1>Login</h1>
          </div>
          <div id="email-div-input">
            <label>Email:</label>
            <input type="text" placeholder="Digite um email" ></input>
            <p id="emailverificated" style={{color: 'red'}}></p>
          </div>
          <div id="senha-div-input">
            <label>Senha:</label>
            <input type="text" placeholder="Digite uma senha"></input>
            <p id="senhaverificated" style={{color: 'red'}}></p>
          </div>
          <div id="criarconta-div-input">
            <a href='/formcreatelogin'>Criar conta</a>
          </div>
          <div id="botao-div">
          <button id="botao">Enviar</button>
          </div>
          <div id="mensagem-certo">
          <p style={{color: 'green'}}></p>
          </div>
        </div>
      </div>
    );
}

export default FormLogin;