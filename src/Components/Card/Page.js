import React, { useState } from 'react';

function Page(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const truncateTitle = (title, maxWords) => {
    const words = title.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + ' ...';
    }
    return title;
  };

  return (
    <div
      className={`m-8 relative w-64 h-64 ${
        isHovered ? 'scale-90 transition-transform' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <img
        src={props.item.image}
        alt="Card"
        className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-50"
      />

      {/* Name */}
      <div className="flex items-center justify-between">
        <div className="p-2 text-center">
          <h6 className="text-zinc-950">{truncateTitle(props.item.title, 3)}</h6>
          <p className="text-zinc-500">{props.item.category}</p>
        </div>
        <div>
          <p className="text-zinc-500">${props.item.price}</p>
        </div>
      </div>

      {/* Centered Button (Conditional Rendering) */}
      {isHovered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Button
          </button>
        </div>
      )}
    </div>
  );
}

export default Page;
