"use client"

import React, { useEffect, useState } from 'react'

function ImgSlider({ images }) {
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToNextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      
    };
  
    const goToPreviousImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      
    };

    useEffect(() => {
        const interval = setInterval(goToNextImage, 5000); // Change image every 5 seconds
    
        return () => {
          clearInterval(interval); // Clean up the interval on component unmount
        };
      }, [currentImageIndex]);
  console.log("currentImageIndex", images)
    return (
        <div className="w-full max-w-lg mx-auto">
        <div className="relative">
          <img
            src={images[currentImageIndex]}
            alt="Slider Image"
            className="w-full h-auto p-10"
          />
          <div className="absolute inset-0 flex justify-between items-center">
            <button
              onClick={goToPreviousImage}
              className="p-2 bg-gray-800 bg-opacity-50 text-white"
            >
              &lt;
            </button>
            <button
              onClick={goToNextImage}
              className="p-2 bg-gray-800 bg-opacity-50 text-white"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>


    )
}

export default ImgSlider
