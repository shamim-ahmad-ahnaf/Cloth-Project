import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from './Loading';
import { ProductContext } from './utils/Context';

export default function Details() {
  const [products] = useContext(ProductContext); 
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products && id) {
      const foundProduct = products.find((item) => item.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [products, id]);

  return product ? (
    <div className="w-[90%] md:w-[70%] h-full m-auto p-8 md:p-[5%] flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center">
      <img
        className="h-60 md:h-[80%] w-auto rounded-lg object-cover hover:scale-110 transition-all duration-300"
        src={product.image}  
        alt={product.title}
      />
      <div className="text-center content md:text-left">
        <h1 className="mb-4 text-2xl font-bold md:text-3xl">{product.title}</h1>
        <h2 className="mb-2 text-lg text-gray-600">{product.category}</h2>
        <p className="mb-4 text-xl font-semibold text-green-700">${product.price}</p>
        <p className="mb-6 text-sm text-gray-700">{product.description}</p>
        <div className="flex justify-center gap-4 md:justify-start">
          <Link
            type="button"
            className="text-green-600 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Edit
          </Link>
          <Link
            type="button"
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Delete
          </Link>
          <Link
            className="text-green-600 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            to="/"
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
