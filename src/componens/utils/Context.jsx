import axios from '../utils/Axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export default function ContextProvider({ children }) {
  const [products, setProducts] = useState(null);

  const getProduct = async () => {
    try {
      const { data } = await axios.get("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {children}
    </ProductContext.Provider>
  );
}
