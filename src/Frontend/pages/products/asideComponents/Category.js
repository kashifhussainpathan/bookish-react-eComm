import { useContext } from "react";
import { ProductsContext } from "../../../context/ProductsContext";

export const Category = () => {
  const { state, dispatch } = useContext(ProductsContext);

  const handleToggleCategory = (category) => {
    dispatch({ type: "TOGGLE_CATEGORY", payload: category });
  };

  const handleToggleAllCategory = () => {
    dispatch({ type: "TOGGLE_CATEGORY", payload: "ALL_CATEGORY" });
  };

  return (
    <div className="category-filter">
      <h3>Category</h3>
      <div>
        <label htmlFor="All">
          <input
            type="checkbox"
            name="All"
            checked={state.category.ALL_CATEGORY}
            onChange={handleToggleAllCategory}
          />{" "}
          All
        </label>
      </div>

      <div>
        <label htmlFor="Self Help">
          <input
            type="checkbox"
            name="Self Help"
            checked={state.category.SELF_HELP}
            onChange={() => handleToggleCategory("SELF_HELP")}
          />{" "}
          Self Help
        </label>
      </div>

      <div>
        <label htmlFor="Literature">
          <input
            type="checkbox"
            name="Literature"
            checked={state.category.LITERATURE}
            onChange={() => handleToggleCategory("LITERATURE")}
          />{" "}
          Literature
        </label>
      </div>

      <div>
        <label htmlFor="Spirituality">
          <input
            type="checkbox"
            name="Spirituality"
            checked={state.category.SPIRITUALITY}
            onChange={() => handleToggleCategory("SPIRITUALITY")}
          />{" "}
          Spirituality
        </label>
      </div>

      <div>
        <label htmlFor="Science Fiction">
          <input
            type="checkbox"
            name="Science-Fiction"
            checked={state.category.SCIENCE_FICTION}
            onChange={() => handleToggleCategory("SCIENCE_FICTION")}
          />{" "}
          Science Fiction
        </label>
      </div>

      <div>
        <label htmlFor="Biographies">
          <input
            type="checkbox"
            name="Biographies"
            checked={state.category.BIOGRAPHIES}
            onChange={() => handleToggleCategory("BIOGRAPHIES")}
          />{" "}
          Biographies
        </label>
      </div>

      <div>
        <label htmlFor="Mythology">
          <input
            type="checkbox"
            name="Mythology"
            checked={state.category.MYTHOLOGY}
            onChange={() => handleToggleCategory("MYTHOLOGY")}
          />{" "}
          Mythology
        </label>
      </div>

      <div>
        <label htmlFor="Contemporary-Fiction">
          <input
            type="checkbox"
            name="Contemporary-Fiction"
            checked={state.category.CONTEMPORARY_FICTION}
            onChange={() => handleToggleCategory("CONTEMPORARY_FICTION")}
          />{" "}
          Contemporary-Fiction
        </label>
      </div>

      <div>
        <label htmlFor="Psychological-Thriller">
          <input
            type="checkbox"
            name="Psychological-Thriller"
            checked={state.category.PSYCHOLOGICAL_THRILLER}
            onChange={() => handleToggleCategory("PSYCHOLOGICAL_THRILLER")}
          />{" "}
          Psychological Thriller
        </label>
      </div>
    </div>
  );
};
