import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../context/ProductsContext";

// Importing Images
import bestSeller from "../../../assets/collectionsImages/bestsellers.8e12bd5e.webp";
import expertPicks from "../../../assets/collectionsImages/expert.c9e96319.webp";
import newRelease from "../../../assets/collectionsImages/new-release.717e793b.webp";

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
            <img src={bestSeller} alt="Collection Images" />{" "}
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
            <img src={newRelease} alt="Collection Images" />{" "}
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
            <img src={expertPicks} alt="Collection Images" />{" "}
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
