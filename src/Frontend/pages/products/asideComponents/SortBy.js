import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

export const SortBy = () => {
  const { state, dispatch } = useContext(ProductsContext);

  const handleSortByChange = (e) => {
    dispatch({ type: "SORT-BY", payload: e.target.value });
  };
  return (
    <div className="category-filter">
      <h3>Sort by</h3>
      <div>
        <label htmlFor="lowtohigh">
          <input
            type="radio"
            name="price"
            id="lowtohigh"
            value="LowToHigh"
            checked={state.sortBy === "LowToHigh"}
            onChange={handleSortByChange}
          />{" "}
          Price - Low to High
        </label>
      </div>
      <div>
        <label htmlFor="hightolow">
          <input
            type="radio"
            name="price"
            id="hightolow"
            value="HighToLow"
            checked={state.sortBy === "HighToLow"}
            onChange={handleSortByChange}
          />{" "}
          Price - High to Low
        </label>
      </div>
    </div>
  );
};
