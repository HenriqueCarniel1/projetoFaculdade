import { useEffect, useState } from 'react';
import Header from '../../components/header';
import './style.css';
import axios from 'axios';

interface Props {
    idproduto: number;
    nome: string;
    preco: string;
    descricao: string;
    ficha_tecnica: string;
    imagem: string;
    data_de_entrega: string;
}

function Carrinho() {
    const [data, setData] = useState<Props[]>([]);

    const handleGetProdutoCarrinho = () => {
        const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
        const idUsuario = usuario.idusuario;

        axios.get(`http://localhost:4000/get/produto/carrinho/${idUsuario}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Erro ao buscar produtos do carrinho:", error);
            });
    };

    const handleDeleteProduto = (idProduto: number | undefined) => {
        axios.delete(`http://localhost:4000/delete/produto/carrinho/${idProduto}`)
            .then((response) => {
                if (response.status === 200) {
                    handleGetProdutoCarrinho();
                }
            })
            .catch((error) => {
                console.error("Erro ao remover produto do carrinho:", error);
            });
    };

    useEffect(() => {
        handleGetProdutoCarrinho();
    }, []);


    return (
        <div>
            <Header />
            <div className="container1">
                {data.length > 0 ? (
                    <div className="produtos-grid">
                        {data.map((produto) => (
                            <div key={produto.idproduto} className="card">
                                <img src={produto.imagem} alt={produto.nome} className="card-image" />
                                <div className="card-content">
                                    <h4>{produto.nome}</h4>
                                    <p>{produto.descricao}</p>
                                    <p><strong>Preço:</strong> R$ {parseFloat(produto.preco).toFixed(2)}</p>
                                    <p><strong>Entrega:</strong> {new Date(produto.data_de_entrega).toLocaleDateString()}</p>
                                    <button
                                        className="button-delete"
                                        onClick={() => handleDeleteProduto(produto.idproduto)}
                                    >
                                        Remover do Carrinho
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="container5">
                        <div className="carrinho">
                            <h1 className="title">O seu carrinho está vazio</h1>
                        </div>
                        <div className="subtitulo">
                            <p>Deseja olhar outros produtos similares?</p>
                        </div>
                        <button className="button">
                            <p>Continuar Comprando</p>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Carrinho;
