import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import './style.css';

interface Prop {
    idproduto: string;
    data_de_entrega: string;
    descricao: string;
    nome: string;
    imagem: string;
    preco: number;
}

function Cards() {
    const [dados, setDados] = useState<Prop[]>([]);

    const fetchData = useCallback(async () => {
        try {
            const response = await axios.get('https://api-projetofaculdade.onrender.com/get/produto');
            setDados(prevData => {
                if (JSON.stringify(prevData) !== JSON.stringify(response.data)) {
                    return response.data;
                }
                return prevData;
            });
        } catch (error) {
            console.error('Erro ao buscar os dados:', error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <div className='cards'>
            {dados.map((item) => (
                <Card key={item.idproduto} className='card'>
                    <div className='icons'>
                        <IoMdCart />
                        <FaHeart />
                    </div>
                    <Card.Img variant="top" src={item.imagem} alt={item.nome} loading="lazy" />
                    <Card.Body>
                        <Card.Title>{item.nome}</Card.Title>
                        <Card.Text>R$: {item.preco}</Card.Text>
                        <Card.Text>{item.descricao}</Card.Text>
                        <Button className='botaoComprar' variant="dark">Comprar</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default Cards;
