import { useState } from "react";
import './style.css'

const Filtros = () => {
  const [categoria, setCategoria] = useState("todas");
  const [preco, setPreco] = useState("todas");
  const [classificacao, setClassificacao] = useState("padrao");

  return (
    <div className="filtros">
      <select id="categoria" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="todas">Categorias:</option>
        <option value="eletronicos">Eletrônicos</option>
        <option value="moda">Moda</option>
        <option value="casa">Casa</option>
        <option value="esportes">Esportes</option>
      </select>

      <select id="preco" name="preco" value={preco} onChange={(e) => setPreco(e.target.value)}>
        <option value="todas">Filtrar por preço:</option>
        <option value="100-500">R$ 100 até R$ 500</option>
        <option value="500-1500">R$ 500 até R$ 1500</option>
        <option value="1500-3000">R$ 1500 até R$ 3000</option>
        <option value="3000-mais">R$ 3000 até sem limite</option>
      </select>

      <select id="classificacao" name="classificacao" value={classificacao} onChange={(e) => setClassificacao(e.target.value)}>
        <option value="padrao">Classificar por:</option>
        <option value="menores-precos">Menores Preços</option>
        <option value="mais-vendidos">Mais Vendidos</option>
        <option value="melhor-avaliacao">Melhor Avaliação</option>
      </select>
    </div>
  );
};

export default Filtros;
