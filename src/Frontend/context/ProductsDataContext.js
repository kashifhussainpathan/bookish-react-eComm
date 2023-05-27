import { createContext, useEffect, useState } from "react";

export const ProductsDataContext = createContext();

export const ProductsDataProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const { products } = await response.json();
      if (response.status === 200) {
        setProductsData(products);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const { categories } = await response.json();
      if (response.status === 200) {
        setCategoriesData(categories);
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const value = { productsData, categoriesData };
  return (
    <ProductsDataContext.Provider value={value}>
      {children}
    </ProductsDataContext.Provider>
  );
};
