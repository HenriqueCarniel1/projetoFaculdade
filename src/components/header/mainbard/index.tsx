import './style.css'
import { MdLocalOffer } from 'react-icons/md';
import { BiSolidOffer } from 'react-icons/bi';
import { GiLaurelsTrophy } from 'react-icons/gi';

let Mainbar = () => {
    return (
        <div className="list-content">
            <ul>
                <li><i><MdLocalOffer /></i>Ofertas</li>
                <li><i><GiLaurelsTrophy /></i>Mais Vendidos</li>
                <li><i><BiSolidOffer /></i>Cupons</li>
            </ul>
        </div>
    )
}

export default Mainbar;