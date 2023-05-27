import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

export const Rating = () => {
  const { dispatch, state } = useContext(ProductsContext);

  const handleRatingChange = (e) => {
    dispatch({ type: "FILTER-BY-RATING", payload: e.target.value });
  };

  return (
    <div className="category-filter">
      <h3>Rating</h3>
      <div>
        <label htmlFor="4.5Star">
          <input
            type="radio"
            name="rating"
            id="4.5Star"
            value="4.5"
            checked={state.filterByRating === "4.5"}
            onChange={handleRatingChange}
          />{" "}
          4.5 Stars & above
        </label>
      </div>
      <div>
        <label htmlFor="4Star">
          <input
            type="radio"
            name="rating"
            id="4Star"
            value="4"
            checked={state.filterByRating === "4"}
            onChange={handleRatingChange}
          />{" "}
          4 Stars & above
        </label>
      </div>
      <div>
        <label htmlFor="3Star">
          <input
            type="radio"
            name="rating"
            id="3Star"
            value="3"
            checked={state.filterByRating === "3"}
            onChange={handleRatingChange}
          />{" "}
          3 Stars & above
        </label>
      </div>
    </div>
  );
};
