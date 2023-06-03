import { useContext, useState } from "react";

// importing Loader
import loader from "../../assets/Loader.webp";

import { Aside } from "./components/Aside";
import { Main } from "./components/Main";

import "./productsStyle.css";
import { Nav } from "../home/homeComponents/Nav";
import { AiFillFilter } from "react-icons/ai";
import { ProductsDataContext } from "../../context/ProductsDataContext";

export const Products = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const { isLoading } = useContext(ProductsDataContext);
  const toggleFilters = () => {
    if (window.innerWidth < 768) {
      setIsFiltersOpen(!isFiltersOpen);
    }
  };

  return (
    <div className="products-container">
      {/* Products Page */}
      <Nav productPage />
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader">
            <img src={loader} alt="Loader"></img>
          </div>
        </div>
      )}
      <AiFillFilter
        className="responsive-filters-button"
        onClick={toggleFilters}
      />{" "}
      <section className="products-section">
        <div
          className={`products-aside-section ${
            isFiltersOpen ? "showFilters" : ""
          }`}
        >
          <Aside />
        </div>
        <div className="products-main-section">
          <Main />
        </div>
      </section>
    </div>
  );
};
