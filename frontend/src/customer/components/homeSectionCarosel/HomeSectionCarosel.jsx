import React, { useState, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material'; 


export const HomeSectionCarosel = ({ data, sectionName }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);

  const updateProductsPerPage = () => {
    if (window.innerWidth < 640) {
      setProductsPerPage(2);
    } else if (window.innerWidth < 1024) {
      setProductsPerPage(2);
    } else {
      setProductsPerPage(4);
    }
  };

  useEffect(() => {
    updateProductsPerPage();

    window.addEventListener('resize', updateProductsPerPage);

    return () => {
      window.removeEventListener('resize', updateProductsPerPage);
    };
  }, []);

  const totalProducts = data.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage((pageNumber % totalPages) || totalPages);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="relative">
      <h2 className='text-2xl font-extrabold text-gray-800'>{sectionName}</h2>
      <div className="container m-auto">
        <div className={`grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 m-auto`}>
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 shadow-md object-cover object-top overflow-hidden">
              <img src={product.imageUrl} alt={product.title} className="w-full h-50 object-cover mb-2" />
              <h3 className="text-lg sm:text-sm font-semibold mb-1">{product.brand}</h3>
              <p className="text-gray-600 mb-1">{product.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between px-4 ">
        <Button onClick={() => paginate(currentPage + 1)} variant='contained' className='z-50 bg-white' sx={{ position: 'absolute', top: '10rem', left: '0rem', transform: 'translateX(-10%) rotate(-90deg)', bgcolor: 'white', color: 'black' }} aria-label='next'
        ><KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)' }} /></Button>

        <Button onClick={() => paginate(currentPage - 1)} variant='contained' className='z-50 bg-white  ' sx={{ position: 'absolute', top: '10rem', right: '0rem', transform: 'translateX(0%) rotate(90deg)', bgcolor: 'white' }} aria-label='next' >
          <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg) ', color: 'black' }} />
        </Button>
      </div>
    </div>
  );
};
