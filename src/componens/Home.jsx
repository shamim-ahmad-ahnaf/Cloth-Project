import React, { useContext } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { ProductContext } from './utils/Context';
import Loading from './Loading';

export default function Home() {
  const [products] = useContext(ProductContext);

  return (
    products ? (
      <>
        <Navbar />
        <div className="h-full w-[90%] md:w-[85%] p-4 md:p-10 pt-[5%] flex flex-wrap gap-4 justify-center mx-auto">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/details/${product.id}`}
              className="card p-4 md:p-5 rounded-lg shadow-lg w-full sm:w-[48%] md:w-[30%] lg:w-[22%] h-[50vh] flex flex-col items-center justify-center bg-white hover:bg-gray-100 transition-all duration-300"
            >
              <div
                className="w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3 hover:scale-110 transition-all duration-300 object-cover overflow-hidden"
                style={{
                  backgroundImage: `url(${product.image})`,
                }}
              />
              <h1 className="text-sm font-semibold text-center md:text-base hover:text-blue-500">
                {product.title}
              </h1>
            </Link>
          ))}
        </div>
      </>
    ) : (
      <Loading />
    )
  );
}
