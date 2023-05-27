import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ProductsContext } from "../../../context/ProductsContext";
import { ProductsDataContext } from "../../../context/ProductsDataContext";

export const Genre = () => {
  const { dispatch } = useContext(ProductsContext);
  const { categoriesData } = useContext(ProductsDataContext);

  const handleToggleCategory = (category) => {
    dispatch({ type: "TOGGLE_CATEGORY", payload: category });
  };

  return (
    /* Genre Section */
    <section className="genre-section">
      <h2 className="genre-title">Books in your favourite genre</h2>
      <div className="genre-wrapper">
        {categoriesData.map(({ _id, categoryName, image, value }) => (
          <div className="single-genre-item" key={_id}>
            <div className="single-genre-item__image">
              <img src={image} alt={categoryName}></img>{" "}
              <NavLink
                to="/products"
                onClick={() => handleToggleCategory(value)}
              >
                <div className="single-genre-item__link">Explore Now</div>
              </NavLink>
            </div>
            <h4>{categoryName}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
