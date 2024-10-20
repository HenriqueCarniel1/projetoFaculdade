import React, { useState, useEffect } from 'react';
import './style.css';

interface BannerCarouselProps {
    images: string[];
}

const BannerCarousel: React.FC<BannerCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = images.length;

    useEffect(() => {
        const autoSlideInterval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(autoSlideInterval);
    }, [currentIndex]);

    const showSlide = (index: number) => {
        setCurrentIndex((index + totalSlides) % totalSlides);
    };

    const nextSlide = () => {
        showSlide(currentIndex + 1);
    };

    const prevSlide = () => {
        showSlide(currentIndex - 1);
    };

    return (
        <div className='d-flex justify-content-center'>

            <div className="carousel-container">
                <div
                    className="carousel-images"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Imagem ${index + 1}`} />
                    ))}
                </div>

                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>

                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={currentIndex === index ? 'active' : ''}
                            onClick={() => showSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BannerCarousel;
