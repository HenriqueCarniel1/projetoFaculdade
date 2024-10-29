import './style.css';
import FotoIphone from '../../img/iphone.webp';
import { useState } from 'react';

const ProdutoUnico: React.FC = () => {
    // Estados para controlar a visibilidade e o conteúdo dos campos
    const [comentarioTexto, setComentarioTexto] = useState<string>('');
    const [conteudoImportante, setConteudoImportante] = useState<string>('');
    const [estrelasSelecionadas, setEstrelasSelecionadas] = useState<number>(0);
    const [mostrarCampoComentario, setMostrarCampoComentario] = useState<boolean>(false);
    const [comentarios, setComentarios] = useState<JSX.Element[]>([]);

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

    return (
        <div className="ProductContainer">
            <div className="titulo-produto-geral">
                <h1 className="produto-title">Apple iPhone 15 Pro Max 256GB - Preto</h1>
            </div>
            <div className="produto-geral">
                <div className="produto-container">
                    <div className="produto-elementos">
                        <div className="produto-imagem">
                        <img className="produto-img" src={FotoIphone} alt="Iphone" />
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
                                <p className="produto-preco-riscado">R$ 10.143,22</p>
                                <p className="produto-paragrafo-button">Baixou 5%</p>
                            </div>
                            <div className="produto-valor">
                                <p><strong>R$ 9.599,00</strong> em até <strong>10x de R$ 959,90</strong> sem juros no cartão de crédito.</p>
                            </div>
                        </div>
                        <div className="produto-valores">
                            <div className="produto-titulo-valor">
                                <h2 className="produto-titulo-valor-destaque">R$ 8.639,10</h2>
                                <div className="produto-botoes-valor">
                                    <button className="produto-botao-carrinho">Adicionar ao carrinho</button>
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
                    <li className="detalhes-produto"><strong>FORJADO EM TITÂNIO —</strong> O iPhone 15 Pro Max tem design robusto e
                        leve em titânio aeroespacial. Na parte de trás, vidro matte texturizado e, na frente, Ceramic Shield
                        mais resistente que qualquer vidro de smartphone. Ele também é durão contra respingos, água e poeira
                    </li>
                    <li className="detalhes-produto"><strong>TELA AVANÇADA —</strong> A tela Super Retina XDR de 6,7 pol. com
                        ProMotion aumenta as taxas de atualização para 120 Hz quando você precisa de gráficos mais
                        impressionantes. A Dynamic Island mostra alertas e Atividades ao Vivo. Além disso, com a tela Sempre
                        Ativa, você nem precisa tocar na Tela Bloqueada para ficar de olho em tudo.</li>
                    <li className="detalhes-produto"><strong>CHIP A17 PRO REVOLUCIONÁRIO —</strong> Com GPU de categoria Pro, os
                        games para celular ficam mais imersivos, com ambientes detalhados e personagens muito realistas. O chip
                        A17 Pro é incrivelmente eficiente e ajuda a garantir bateria para o dia todo</li>
                    <li className="detalhes-produto"><strong>SISTEMA DE CÂMERA PRO PODEROSO —</strong> Aumente suas possibilidades
                        de enquadramento com sete lentes Pro. Fotografe em altíssima resolução e tenha mais cores e detalhes com
                        a câmera grande-angular de 48 MP. Os closes vão ficar mais nítidos a uma distância ainda maior com a
                        câmera teleobjetiva de 5x no iPhone 15 Pro Max.</li>
                    <li className="detalhes-produto"><strong>BOTÃO DE AÇÃO CONFIGURÁVEL —</strong> O botão de Ação deixa seu recurso
                        favorito sempre à mão. Basta definir qual ação você quer usar, como modo Silencioso, Câmera, Gravador,
                        Atalhos, entre outras. Depois, mantenha o botão pressionado para iniciar.</li>
                    <li className="detalhes-produto"><strong>CONECTIVIDADE PRO —</strong> Com a nova porta USB‑C, você recarrega seu
                        iPhone 15 Pro com o mesmo cabo que usa para recarregar o Mac ou o iPad. Com USB 3, a velocidade de
                        transferência de dados dá um salto enorme. E você transfere arquivos até duas vezes mais rápido</li>
                    <li className="detalhes-produto"><strong>RECURSO ESSENCIAL DE SEGURANÇA —</strong> Com a Detecção de Acidente, o
                        iPhone é capaz de identificar se você sofreu um acidente grave de carro e ligar para a emergência se
                        você não puder</li>
                    <li className="detalhes-produto"><strong>PROJETADO PARA FAZER A DIFERENÇA — </strong> O iPhone protege sua
                        privacidade e deixa você no controle dos seus dados. Ele é feito com mais materiais reciclados para
                        minimizar o impacto ambiental. E vem com recursos integrados para ser cada vez mais acessível a todas as
                        pessoas.</li>
                </ul>
            </div>
            <div className="produto-tecnico-container">
                <div className="produto-titulo-tecnico">
                    <h2 className="produto-tecnico">Detalhes Técnicos</h2>
                    <h3 className="produto-nome">iPhone 15 Pro Max</h3>
                </div>
            </div>
            <table>
                <tr className="mudar-cor">
                    <th>tela</th>
                    <td>Super Retina XDR display, 6.7-inch (diagonal) all-screen OLED display, 2796x1290-pixel, resolution at
                        460 ppi</td>
                </tr>
                <tr>
                    <th>Capacidade</th>
                    <td>256GB, 512GB, 1TB</td>
                </tr>
                <tr className="mudar-cor">
                    <th>Câmera</th>
                    <td>
                        Principal de 48 MP: 24 mm, abertura de f/1,78, estabilização ótica de imagem com deslocamento de sensor
                        de segunda geração, 100% de pixels de foco, suporte para fotos de resolução super alta (24 MP e 48 MP),
                        12MP Ultra Wide: 13mm, abertura ƒ/2.2 e campo de visão de 120°, Telefoto 2x de 12 MP (habilitada por
                        sensor de quatro pixels): 48 mm, abertura f/1,78, estabilização ótica de imagem com deslocamento de
                        sensor de segunda geração, 100% Focus Pixels, Telefoto 5x de 12 MP: 120 mm, abertura ƒ/2,8,
                        estabilização ótica de imagem com deslocamento de sensor 3D e foco automático, design tetraprisma, Zoom
                        óptico de 5x, zoom óptico de 2x; Faixa de zoom óptico de 10x, Zoom digital de até 25x</td>
                </tr>
                <tr>
                    <th>Gravação de vídeo</th>
                    <td>Gravação de vídeo 4K a 24 fps, 25 fps, 30 fps ou 60 fps, Gravação de vídeo HD 1080p a 25 fps, 30 fps ou
                        60 fps, Gravação de vídeo HD 720p a 30 fps, Modo cinematográfico até 4K HDR a 30 fps, Modo de ação de
                        até 2,8K a 60 fps, Gravação de vídeo HDR com Dolby Vision até 4K a 60 fps, Gravação de vídeo ProRes até
                        4K a 60 fps com gravação externa, Registrar gravação de vídeo, Sistema de codificação de cores da
                        Academia, Gravação de vídeo macro, incluindo câmera lenta e time-lapse</td>
                </tr>
                <tr className="mudar-cor">
                    <th>Câmera Frontal</th>
                    <td>Câmera de 12 MP, Abertura de ƒ/1.9, Foco automático com pixels de foco, Flash Retina, Motor Fotônico,
                        Fusão Profunda, HDR inteligente 5, Retratos de última geração com controle de foco e profundidade,
                        Iluminação de retrato com seis efeitos, Animoji e Memoji, Modo noturno</td>
                </tr>
                <tr>
                    <th>Energia e bateria</th>
                    <td>Reprodução de vídeo: Até 29 horas, Reprodução de vídeo (transmitido): Até 25 horas, Reprodução de áudio:
                        Até 95 horas</td>
                </tr>
                <tr className="mudar-cor">
                    <th>Conteúdo da caixa</th>
                    <td>iPhone com iOS 17, Cabo de carregamento USB-C (1m), Documentação</td>
                </tr>
                <tr>
                    <th>Altura</th>
                    <td>159,9 mm</td>
                </tr>
                <tr className="mudar-cor">
                    <th>Largura</th>
                    <td>76,7 mm</td>
                </tr>
                <tr>
                    <th>Profundidade</th>
                    <td>8,25 mm</td>
                </tr>
                <tr className="mudar-cor">
                    <th>Peso</th>
                    <td>221 gramas</td>
                </tr>
                <tr>
                    <th>Anatel</th>
                    <td>12782-23-01993</td>
                </tr>
            </table>

            <div className="produto-avaliacao-geral">
                <h2 className="produto-avaliacao-titulo">Avalie este produto</h2>
                <p className="produto-avaliacao-texto">Compartilhe seus pensamentos com outros clientes</p>
            </div>

            <div className="produto-comentarios-container">
                <div className="produto-button-avaliacao">
                    <button className="produto-button-comentarios" onClick={handleAdicionarComentarioClick} id="adicionarComentarioBtn">Escreva uma avaliação</button>
                </div>
                {mostrarCampoComentario && (
                    <>
                        <div className="produto-avaliacao-opcoes">
                            <h3>Classificação geral:</h3>
                            <div className="produto-avaliacao-estrelas">
                                {[5, 4, 3, 2, 1].map((estrela) => (
                                    <label key={estrela}>
                                        <input
                                            type="radio"
                                            name="estrela"
                                            value={estrela}
                                            checked={estrelasSelecionadas === estrela}
                                            onChange={() => setEstrelasSelecionadas(estrela)}
                                        />
                                        <span
                                            style={{
                                                color: estrela <= estrelasSelecionadas ? 'gold' : '#ccc',
                                                fontSize: '25px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            &#9733;
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="produto-container-conteudo-importante">
                            <h3>Conteúdo Importante</h3>
                            <textarea
                                id="conteudoImportante"
                                placeholder="Adicione o conteúdo mais importante aqui..."
                                rows={4}
                                value={conteudoImportante}
                                onChange={(e) => setConteudoImportante(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="produto-campo-comentario">
                            <h3>Adicionar uma avaliação escrita</h3>
                            <div className="produto-campo-escrita">
                                <textarea
                                    className="produto-campo-para-escrever"
                                    id="comentarioTexto"
                                    placeholder="Escreva seu comentário..."
                                    rows={4}
                                    value={comentarioTexto}
                                    onChange={(e) => setComentarioTexto(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="produto-botoes">
                                <button onClick={handleConfirmarComentarioClick}>Adicionar</button>
                                <button onClick={handleCancelarComentarioClick}>Cancelar</button>
                            </div>
                        </div>
                    </>
                )}

                <div className="produto-comentarios-lista">
                    {comentarios}
                </div>
            </div>
        </div>
    );
};

export default ProdutoUnico;
