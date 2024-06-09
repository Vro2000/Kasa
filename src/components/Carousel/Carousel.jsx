// src/components/Carousel/Carousel.jsx
import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevious}><i className="fa-solid fa-chevron-left"></i> </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      {images.length > 1 && ( <div className="counter"> {currentIndex + 1} / {images.length} </div> )}
      <button onClick={goToNext}><i className="fa-solid fa-chevron-right"></i></button>
    </div>
  );
};

export default Carousel;
