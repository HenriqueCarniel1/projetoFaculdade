import React, { useState } from 'react';
import "./style.css";
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdLocalOffer } from 'react-icons/md';
import { BiSolidOffer } from 'react-icons/bi';
import { GiLaurelsTrophy } from 'react-icons/gi';
import Logo from '../../img/logo.png';
import LinkLogin from "./linklogin";
import Filtros from '../filtros';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const abrirNav = () => setOpen(!open);
  const handleMouseOpen = () => setOpenLogin(true);
  const handleMouseOff = () => setOpenLogin(false);

  return (
    <div>
      <header className="header-menu">
        <div className="navbar">
          <div className="logo">
            <a href="/">
              <img src={Logo} alt="logo" className="imglogo" />
              <p style={{color: 'black'}}>LOGO</p>
            </a>
          </div>


          <div className="pesquisa">
            <input type="text" id="busca" name="busca" placeholder="Buscar produtos..." />
            <button className="botaoHeader">
              <BiSearchAlt2 size="20" />
            </button>
          </div>


          <div className="login" onMouseOver={handleMouseOpen} onMouseOut={handleMouseOff}>
            <RiAccountPinCircleFill /><p className="P-login">Login</p>
            {openLogin && <LinkLogin on={handleMouseOpen} off={handleMouseOff} />}
          </div>

          <div className="carrinho">
            <a href="/carrinho">
              <FaShoppingCart /><p>Carrinho</p>
            </a>
          </div>

          <div className="Main-bar" onClick={abrirNav}>
            <GiHamburgerMenu /><p className="P-Main-bar"></p>
          </div>
        </div>

        <div className="menu">
          <ul>
            <li><MdLocalOffer size={"25"} />Ofertas</li>
            <li><GiLaurelsTrophy size={"25"} />Mais Vendidos</li>
            <li><BiSolidOffer size={"25"} />Cupons</li>
          </ul>
        </div>
      </header>

      <Filtros />
    </div>
  );
};



export default Header;
