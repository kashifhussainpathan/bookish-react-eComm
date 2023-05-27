import axios from "axios";
import { createContext, useState } from "react";

export const ProductDetailsContext = createContext();

export const ProductDetailsProvider = ({ children }) => {
  const [product, setProduct] = useState({});
  const [isProductDetailsLoading, setIsProductDetailsLoading] = useState(true);

  const getProductsDetails = async (productId) => {
    setIsProductDetailsLoading(true);
    try {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data.product);
      setIsProductDetailsLoading(false);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const value = { getProductsDetails, product, isProductDetailsLoading };
  return (
    <ProductDetailsContext.Provider value={value}>
      {children}
    </ProductDetailsContext.Provider>
  );
};
