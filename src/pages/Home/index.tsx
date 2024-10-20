import BannerCarousel from "../../components/banner";
import Cards from "../../components/cards";
import Header from "../../components/header";

function Home() {
    const images = [
        'https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Imagem+1',
        'https://via.placeholder.com/800x400/33C1FF/FFFFFF?text=Imagem+2',
        'https://via.placeholder.com/800x400/28B463/FFFFFF?text=Imagem+3',
    ];

    return (
        <div>
            <Header />
            <BannerCarousel images={images} />
            <Cards />
        </div>
    );
}

export default Home;
