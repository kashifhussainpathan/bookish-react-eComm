import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

export const Collections = () => {
  const { state, dispatch } = useContext(ProductsContext);
  return (
    <div className="category-filter">
      <h3>Collections</h3>
      <div>
        <label htmlFor="Best Sellers">
          <input
            type="checkbox"
            name="Best Sellers"
            checked={state.collections.BEST_SELLERS}
            onChange={() => dispatch({ type: "BEST_SELLERS" })}
          />{" "}
          Best Sellers
        </label>
      </div>
      <div>
        <label htmlFor="New Releases">
          <input
            type="checkbox"
            name="New Releases"
            checked={state.collections.NEW_RELEASES}
            onChange={() => dispatch({ type: "NEW_RELEASES" })}
          />{" "}
          New Releases
        </label>
      </div>
      <div>
        <label htmlFor="Expert Picks">
          <input
            type="checkbox"
            name="Expert Picks"
            checked={state.collections.EXPERT_PICKS}
            onChange={() => dispatch({ type: "EXPERT_PICKS" })}
          />{" "}
          Expert Picks
        </label>
      </div>
    </div>
  );
};
