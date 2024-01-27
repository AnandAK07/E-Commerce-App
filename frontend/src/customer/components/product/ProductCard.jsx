import React from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({ product }) => {
    const navigate=useNavigate();


  return (
      <div onClick={() => navigate(`/product/${5}`)} key={product.id} className="group relative">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
          </div>
          <div className="mt-4 flex flex-col">
              <div>
                  <div>

                      <h3 className="font-bold text-gray-700">
                          <a href={product.href}>
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.title}
                          </a>
                      </h3>
                      <p className='text-sm text-gray-700'>{product.brand}</p>
                  </div>
                  <div className='flex items-center space-x-3'>
                      <p className=" ">₹{product.price}</p>
                      <p className="line-through text-gray-500">₹{product.discountedPrice}</p>
                      <p className='text-green-600 font-semibold'>{product.discountPersent}% off</p>
                  </div>
              </div>
          </div>
      </div>
  )
}
