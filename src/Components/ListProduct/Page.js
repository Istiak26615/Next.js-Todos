import React, { useState } from 'react';

function Page(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const productImageClasses = `w-16 h-16 object-cover rounded-full ${
    isHovered ? 'transform scale-110 transition-transform' : ''
  }`;

  const containerClasses = `flex items-center space-x-4 p-2 ${
    isHovered ? 'opacity-50' : ''
  }`;

  return (
    <div
      className={containerClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Small Image */}
      <img
        src={props.item.image}
        alt="Product"
        className={productImageClasses}
      />

      {/* Title */}
      <h3 className="flex-grow">{props.item.title}</h3>

      {/* Price */}
      <p className="text-gray-500">${props.item.price}</p>

      {/* Button (Conditional Rendering) */}
      {isHovered && (
        <button className="bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-500 text-white transition-colors">
          Buy
        </button>
      )}
    </div>
  );
}

export default Page;
