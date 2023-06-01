import { useState } from "react";

import { Aside } from "./components/Aside";
import { Main } from "./components/Main";

import "./productsStyle.css";
import { Nav } from "../home/homeComponents/Nav";
import { AiFillFilter } from "react-icons/ai";

export const Products = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const toggleFilters = () => {
    if (window.innerWidth < 768) {
      setIsFiltersOpen(!isFiltersOpen);
    }
  };

  return (
    <div className="products-container">
      {/* Products Page */}
      <Nav />
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
