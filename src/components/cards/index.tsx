import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import './style.css'

interface Prop {
    idproduto: string,
    data_de_entrega: string,
    descricao: string,
    nome: string
}

function Cards() {
    const [dados, setDados] = useState<Prop[]>([]);

    console.log(dados)

    useEffect(() => {
        try {
            axios.get('https://api-projetofaculdade.onrender.com/get/produto')
                .then(data => {
                    setDados(data.data)
                })
        } catch (error: unknown) {
            console.log(error);
        }

    }, []);

    return (
        <div className='cards'>
            {dados.map((dados, key) => (
                <Card key={key} className='card'>
                    <div className='icons'>
                        <IoMdCart />
                        <FaHeart />
                    </div>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{dados.nome}</Card.Title>
                        <Card.Text>
                            {dados.descricao}
                        </Card.Text>
                        <Button className='botaoComprar' variant="dark">Comprar</Button>

                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Cards