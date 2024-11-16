import './style.css';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

interface Produto {
    idproduto: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
    ficha_tecnica: string;
    data_de_entrega: string;
}

const ProdutoUnico: React.FC = () => {
    const { idProduto } = useParams<{ idProduto: string }>();


    const [comentarioTexto, setComentarioTexto] = useState<string>('');
    const [conteudoImportante, setConteudoImportante] = useState<string>('');
    const [estrelasSelecionadas, setEstrelasSelecionadas] = useState<number>(0);
    const [mostrarCampoComentario, setMostrarCampoComentario] = useState<boolean>(false);
    const [comentarios, setComentarios] = useState<JSX.Element[]>([]);
    const [produto, setProduto] = useState<Produto[]>([]);

    const HandleAdicionarProdutoCarrinho = (idProduto: number) => {
        const usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
        const idUsuario = usuario.idusuario;

        axios.post(`http://localhost:4000/add/produto/carrinho/${idProduto}/${idUsuario}`)
            .then(response => {
                console.log('Produto adicionado ao carrinho:', response.data);
            })
            .catch(error => {
                console.error('Erro ao adicionar produto ao carrinho:', error);
            });
        }

        console.log(produto)


        const handleAdicionarComentarioClick = () => {
            setMostrarCampoComentario(true);
        };

        const handleCancelarComentarioClick = () => {
            setComentarioTexto('');
            setConteudoImportante('');
            setEstrelasSelecionadas(0);
            setMostrarCampoComentario(false);
        };

        const handleConfirmarComentarioClick = () => {
            if (comentarioTexto.trim() && estrelasSelecionadas > 0) {
                const novoComentario = (
                    <div className="comentario">
                        <div className="estrelas-comentario">
                            {[...Array(estrelasSelecionadas)].map((_, i) => (
                                <span key={i}>&#9733;</span>
                            ))}
                        </div>
                        {conteudoImportante && <p><strong>{conteudoImportante}</strong></p>}
                        <p>{comentarioTexto}</p>
                    </div>
                );

                setComentarioTexto('');
                setConteudoImportante('');
                setEstrelasSelecionadas(0);
                setMostrarCampoComentario(false);

                setComentarios([...comentarios, novoComentario]);
            } else {
                alert("Por favor, escreva um comentário e selecione a quantidade de estrelas.");
            }
        };

        useEffect(() => {
            const fetchProductData = async () => {
                try {
                    const response = await axios.get(`http://localhost:4000/get/produto/unico/${idProduto}`);
                    setProduto(response.data);
                } catch (error) {
                    console.error("Erro ao buscar dados do produto:", error);
                }
            };

            if (idProduto) {
                fetchProductData();
            }
        }, [idProduto]);

        return (
            <div className="ProductContainer">
                {produto.map((item) => (
                    <div key={item.idproduto}>
                        <div className="titulo-produto-geral">
                            <h1 className="produto-title">{item.nome}</h1>
                        </div>
                        <div className="produto-geral">
                            <div className="produto-container">
                                <div className="produto-elementos">
                                    <div className="produto-imagem">
                                        <img className="produto-img" src={item.imagem} alt={item.nome} />
                                    </div>
                                    <div className="produto-interacao">
                                        <div className="produto-coracao">
                                            <i className="bi bi-suit-heart"></i>
                                        </div>
                                        <div className="produto-compartilhar">
                                            <i className="bi bi-share"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="produto-textos">
                                    <div className="produto-texto-geral">
                                        <div className="produto-subtitulo">
                                            <i className="bi bi-house-door"></i>
                                            <p className="produto-paragrafo">Vendido e entregue por <span className="produto-destaque">EconoBusca</span></p>
                                        </div>
                                        <div className="produto-precos-riscados">
                                            <p className="produto-preco-riscado">R$ {(item.preco * 1.05).toFixed(2)}</p>
                                            <p className="produto-paragrafo-button">Baixou 5%</p>
                                        </div>
                                        <div className="produto-valor">
                                            <p><strong>R$ {item.preco}</strong> em até <strong>10x de R$ {(item.preco / 10).toFixed(2)}</strong> sem juros no cartão de crédito.</p>
                                        </div>
                                    </div>
                                    <div className="produto-valores">
                                        <div className="produto-titulo-valor">
                                            <h2 className="produto-titulo-valor-destaque">R$ {(item.preco * 0.9).toFixed(2)}</h2>
                                            <div className="produto-botoes-valor">
                                                <button className="produto-botao-carrinho" onClick={() => HandleAdicionarProdutoCarrinho(item.idproduto)}>Adicionar ao carrinho</button>
                                                <button className="produto-botao-comprar">Comprar</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="produto-pix">
                                        <p className="produto-pix-paragrafo">No Pix com <span className="produto-destaque">10% de desconto</span></p>
                                    </div>
                                    <div className="produto-pagamento-opcoes">
                                        <a href="#" className="produto-outros-pagamentos">Ver mais opções de pagamento</a>
                                        <i className="bi bi-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="produto-descricao-container">
                            <div className="produto-titulo-detalhes">
                                <h3 className="produto-detalhe-titulo">Detalhes sobre o produto:</h3>
                            </div>
                            <ul className="produto-lista-detalhes">
                                <li className="detalhes-produto">{item.descricao}</li>
                            </ul>
                        </div>
                        <div className="produto-tecnico-container">
                            <div className="produto-titulo-tecnico">
                                <h2 className="produto-tecnico">Ficha Técnica</h2>
                                <p className="produto-nome">{item.ficha_tecnica}</p>
                            </div>
                            <table>
                                <tr className="mudar-cor">
                                    <th>Data de Entrega</th>
                                    <td>{item.data_de_entrega}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    export default ProdutoUnico;
