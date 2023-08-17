import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]); // Only re-run the effect if the length of images changes

  return (
   
      
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className='rounded h-80 object-cover' />
      
   
  );
};

export default ImageSlider;
