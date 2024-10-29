import React, { useState } from 'react';
import './style.css';

const ProductForm = () => {
  const [product, setProduct] = useState({
    image: '',
    name: '',
    category: '',
    description: '',
    price: '',
    title: ''
  });

  const handleChange = (e:any) => {
    const { name, value, type, files } = e.target;
    setProduct({
      ...product,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSave = () => {
    // Future functionality for saving the product
    console.log('Product saved:', product);
  };

  const handleClear = () => {
    setProduct({
      image: '',
      name: '',
      category: '',
      description: '',
      price: '',
      title: ''
    });
  };

  return (
    <div className="product-form">
      <h2>Adicionar Novo Produto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="image">Imagem do Produto:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nome do Produto:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Categoria:</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="">Selecione uma categoria</option>
            <option value="eletronics">Eletrônicos</option>
            <option value="clothing">Roupas</option>
            <option value="books">Livros</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Preço:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-actions">
          <button type="button" onClick={handleSave}>Salvar Alterações</button>
          <button type="button" onClick={handleClear}>Excluir Tudo</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
