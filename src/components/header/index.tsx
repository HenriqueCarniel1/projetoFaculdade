import "./style.css"
//logo

//icons
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiAccountPinCircleFill } from 'react-icons/ri'
import { FaShoppingCart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdLocalOffer } from 'react-icons/md'
import { BiSolidOffer } from 'react-icons/bi'
import { GiLaurelsTrophy } from 'react-icons/gi'
//imports states
import { useState, useEffect } from 'react'

//import components
import Mainbar from "./mainbard";
import Login from "./login";

interface Tipagem {
    Open: boolean
    OpenLogin: boolean
}

let Header = () => {
    // State que armazena informações da tela de informações para tablets e celulares
    const [open, setOpen] = useState<Tipagem['Open']>(false)

    // State que armazena informações para abrir e fechar a tela de login
    const [OpenLogin, setOpenLogin] = useState<Tipagem['OpenLogin']>(false)

    // Função para abrir uma barra para quem está no celular/ tablet
    let abrirNav = () => {
        setOpen(!open)
        console.log(open)
    }
    // função que abre a tela para login
    let HandleMouseOpen = () => {
        setOpenLogin(true)
        console.log(OpenLogin)
    }
    // função que fecha a tela de login
    let HandlleMouseOff = () => {
        setOpenLogin(false)
        console.log(OpenLogin)
    }

    return (
        <div>
            <header className="header-menu">
                <div className="navbar">
                    <div className="logo">
                        <img src="" alt="" className="imglogo" />
                    </div>

                    <div className="pesquisa">
                        <input type="text" id="busca" name="busca" />
                        <button className="botaoHeader" ><i><BiSearchAlt2 /></i></button>
                    </div>

                    <div className="login"  onMouseOver={HandleMouseOpen} onMouseOut={HandlleMouseOff}>
                        <i><RiAccountPinCircleFill /><p className="P-login">Login</p></i>
                        {
                            OpenLogin && <Login on={HandleMouseOpen} off={HandlleMouseOff}/>
                        }
                    </div>

                    <div className="carrinho">
                        <i><FaShoppingCart /><p className="P-carrinho">Carrinho</p></i>
                    </div>

                    <div className="Main-bar" onClick={abrirNav}>
                        <i><GiHamburgerMenu /><p className="P-Main-bar"></p></i>
                    </div>
                </div>

                <div className="menu">
                    <ul>
                        <li><i><GiHamburgerMenu /></i>Categoria</li>
                        <li><i><MdLocalOffer /></i>Ofertas</li>
                        <li><i><GiLaurelsTrophy /></i>Mais Vendidos</li>
                        <li><i><BiSolidOffer /></i>Cupons</li>
                    </ul>
                </div>
            </header>
            {
                open &&
                <Mainbar />
            }
        </div>
    )
}

export default Header