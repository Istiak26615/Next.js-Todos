"use client"

import React, { useState } from 'react'
import ListProduct from "@/Components/ListProduct/Page";

function Page({ allProducts, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div >
    {currentItems.map((item) => (
        <ListProduct item={item} key={item.id} />
      ))}
      <div className="mt-4 text-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1 ? 'bg-gray-500 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    
      </div>
  )
}

export default Page