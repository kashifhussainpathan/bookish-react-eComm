import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContext";

export const Collections = () => {
  const { dispatch } = useContext(ProductsContext);
  return (
    //   {/* Books Collection */}
    <section className="collections-section">
      <h2 className="collection-title">Books Collection</h2>
      {/* Collection wrapper */}
      <div className="collection-wrapper">
        {/* single collection item */}

        {/*single collection item :-- Best Seller  */}
        <div className="collection-item">
          <div className="single-category-item__image">
            <img
              src="https://planit-shopit.netlify.app/static/media/bestsellers.8e12bd5e.jpeg"
              alt="Collection Images"
            />{" "}
            <Link
              to="/products"
              onClick={() => dispatch({ type: "BEST_SELLERS" })}
            >
              <div className="single-category-item__link">Explore Now</div>
            </Link>
          </div>
          <div className="single-category-item__content">
            <h3 className="title"> Bestsellers </h3>
          </div>
        </div>

        {/* single collection item :-New Releases */}
        <div className="collection-item">
          <div className="single-category-item__image">
            <img
              src="https://planit-shopit.netlify.app/static/media/new%20release.717e793b.jpeg"
              alt="Collection Images"
            />{" "}
            <Link
              to="/products"
              onClick={() => dispatch({ type: "NEW_RELEASES" })}
            >
              <div className="single-category-item__link">Explore Now</div>
            </Link>
          </div>
          <div className="single-category-item__content">
            <h3 className="title"> New Releases </h3>
          </div>
        </div>

        {/* single collection item :- Expert Picks*/}
        <div className="collection-item">
          <div className="single-category-item__image">
            <img
              src="https://planit-shopit.netlify.app/static/media/expert.c9e96319.jpeg"
              alt="Collection Images"
            />{" "}
            <Link
              to="/products"
              onClick={() => dispatch({ type: "EXPERT_PICKS" })}
            >
              <div className="single-category-item__link">Explore Now</div>
            </Link>
          </div>
          <div className="single-category-item__content">
            <h3 className="title"> Expert Picks </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
