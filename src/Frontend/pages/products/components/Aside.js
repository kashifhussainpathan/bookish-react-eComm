import { useContext } from "react";

import { Category } from "../asideComponents/Category";
import { Collections } from "../asideComponents/Collections";
import { Rating } from "../asideComponents/Rating";
import { SortBy } from "../asideComponents/SortBy";
import { ProductsContext } from "../../../context/ProductsContext";
import { ProductsDataContext } from "../../../context/ProductsDataContext";

export const Aside = () => {
  const { productsData } = useContext(ProductsDataContext);
  const { dispatch, state, finalFilteredProducts } =
    useContext(ProductsContext);
  const finalFilteredProductsQuantities = finalFilteredProducts.length;
  const productsQuantities = productsData.length;

  return (
    <div>
      {/* Filter Heading */}
      <div className="products-aside-section__filter_heading">
        <h3>Filters</h3>
        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
      </div>

      <hr />

      {/* Products Quantity */}
      <div className="products-quantity">
        Showing {finalFilteredProductsQuantities} of {productsQuantities}{" "}
        products
      </div>

      <hr />

      <div>
        <input
          className="search_bar"
          placeholder="Search Products Here..."
          onChange={(e) =>
            dispatch({ type: "SEARCH", payload: e.target.value })
          }
        ></input>
      </div>

      <hr />

      {/* Price Range */}
      <div className="price-range-filter">
        <div className="price-range-filte__title">
          <h3>Price</h3>
          <h3> {state.filterPrice}</h3>
        </div>

        <input
          type="range"
          // list="steplist"
          min="100"
          max="600"
          step="50"
          value={state.filterPrice}
          onChange={(e) =>
            dispatch({ type: "FILTER_BY_PRICE", payload: e.target.value })
          }
        />
      </div>

      {/* Category Section */}
      <hr />
      <Category />

      {/* Rating Section */}
      <hr />
      <Rating />

      {/* SortBy Section */}
      <hr />
      <SortBy />

      <hr />
      {/* Collection Section */}
      <Collections />
    </div>
  );
};
