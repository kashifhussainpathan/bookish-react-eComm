// Importing Css
import "./ProductDetailsStyle.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import loader from "../../assets/Loader.webp";

import { Nav } from "../home/homeComponents/Nav";
import { ProductDetailsContext } from "../../context/product-details-context";
import { CartContext } from "../../context/cart-context";
import { WishlistContext } from "../../context/wishlist-context";
import { AuthContext } from "../../context/auth-context";

// React-Icons
import { AiFillStar } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";

export const ProductDetails = () => {
  const { product, isProductDetailsLoading } = useContext(
    ProductDetailsContext
  );

  const navigate = useNavigate();

  const { userToken } = useContext(AuthContext);

  const { cartItems, handleAddToCart, handleRemoveFromCart } =
    useContext(CartContext);

  const { wishlistItems, handleAddToWishlist, handleRemoveFromWishlist } =
    useContext(WishlistContext);

  const {
    _id,
    image,
    title,
    author,
    categoryName,
    price,
    prevPrice,
    discount,
    rating,
    bestseller,
    newRelease,
    expertPick,
  } = product;

  const isInWishlist = wishlistItems.some((item) => item._id === _id);
  const isInCart = cartItems.some((item) => item._id === _id);

  if (isProductDetailsLoading) {
    return (
      <>
        <Nav />
        <div className="product-details-section">
          <div className="product-details-wrapper loader-Center">
            <img src={loader} alt={title} />{" "}
          </div>
        </div>
      </>
    );
  }

  if (!isProductDetailsLoading) {
    return (
      <>
        <Nav />
        <section className="product-details-section">
          <div className="product-details-wrapper">
            <div className="product-details-image">
              <img src={image} alt={title} />
            </div>
            <div className="product-details-right-side">
              <h2 className="product-details-heading"> Title : {title}</h2>
              <div>
                {" "}
                <p>
                  {" "}
                  <b>Author : </b> <span>{author} </span>
                </p>{" "}
                <p>
                  {" "}
                  <b> Category :</b> <span>{categoryName} </span>
                </p>{" "}
              </div>
              <div className="product-details-rating">
                <p>
                  {" "}
                  <b>Rating : </b>
                </p>
                <p>
                  {rating} <AiFillStar />
                </p>
              </div>
              <div className="product-details-price">
                {" "}
                <p>
                  {" "}
                  <b> Price :</b> <span> ₹{price}</span>
                </p>{" "}
                <p>₹{prevPrice} </p>
              </div>
              <p className="product-details-discount">
                {" "}
                <b>Discount :</b> <span>{discount}% </span>
              </p>{" "}
              <div className="product-details-collection">
                <p className="product-details-collection-title">
                  {bestseller && (
                    <p>
                      {" "}
                      Bestseller <FcCheckmark />
                    </p>
                  )}{" "}
                </p>
                <p className="product-details-collection-title">
                  {newRelease && (
                    <p>
                      {" "}
                      New Release <FcCheckmark />
                    </p>
                  )}{" "}
                </p>
                <p className="product-details-collection-title">
                  {" "}
                  {expertPick && (
                    <p>
                      {" "}
                      Expert Pick <FcCheckmark />{" "}
                    </p>
                  )}{" "}
                </p>
              </div>
              <div className="product-details-buttons">
                {isInCart ? (
                  <button
                    className="button"
                    onClick={() => handleRemoveFromCart(_id)}
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    className="button"
                    onClick={() =>
                      userToken
                        ? handleAddToCart(product, userToken)
                        : navigate("/login")
                    }
                  >
                    Add To Cart
                  </button>
                )}

                {isInWishlist ? (
                  <button
                    className="button"
                    onClick={() => handleRemoveFromWishlist(_id, userToken)}
                  >
                    Remove From Wishlist
                  </button>
                ) : (
                  <button
                    className="button"
                    onClick={() =>
                      userToken
                        ? handleAddToWishlist(product)
                        : navigate("/login")
                    }
                  >
                    Add To Wishlist
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};
