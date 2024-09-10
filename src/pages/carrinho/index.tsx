import Header from '../../components/header';
import './style.css'


function Carrinho() {
    return (
        <div>
            <Header />
            <div className="container1">
                <div className="container5">
                    <div className="carrinho">
                        <h1 className='title'>O seu carrinho está vazio</h1>
                    </div>
                    <div className="subtitulo">
                        <p>Deseja olhar outros produtos similares?</p>
                    </div>
                    <button className="button">
                        <p>Continuar Comprando</p>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Carrinho;