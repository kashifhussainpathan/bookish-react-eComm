import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ProductsContext } from "../../../context/ProductsContext";
import { CartContext } from "../../../context/cart-context";
import { WishlistContext } from "../../../context/wishlist-context";

import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../../../context/auth-context";
import { ProductDetailsContext } from "../../../context/product-details-context";

export const Main = () => {
  const navigate = useNavigate();

  const { wishlistItems, handleAddToWishlist, handleRemoveFromWishlist } =
    useContext(WishlistContext);

  const { getProductsDetails } = useContext(ProductDetailsContext);

  const { finalFilteredProducts } = useContext(ProductsContext);

  const { cartItems, handleAddToCart } = useContext(CartContext);

  const { userToken } = useContext(AuthContext);

  return (
    <div className="products-wrapper">
      {finalFilteredProducts?.map((product) => {
        const inWishlist = wishlistItems.find(
          (item) => item._id === product._id
        );
        const isProductInCart = cartItems.find(
          (item) => item._id === product._id
        );
        const {
          _id,
          image,
          title,
          author,
          price,
          discount,
          prevPrice,
          rating,
          bestseller,
          newRelease,
          expertPick,
        } = product;
        return (
          <div className="single-product" key={_id}>
            <Link to="/productdetails" onClick={() => getProductsDetails(_id)}>
              <img src={image} alt={title} />
            </Link>

            <h4>{title} </h4>
            <p> {author}</p>
            <div className="single-product-card-details">
              <span>&#8377;{price}</span>
              <span>&#8377;{prevPrice} </span>
              <span>(Save {discount}%) </span>{" "}
            </div>
            <div className="single-product-card-details__rating">
              <AiFillStar /> {rating}
            </div>
            <p className="collection_details best_seller">
              {bestseller && "BEST SELLER"}
            </p>
            <p className="collection_details" id="new_release">
              {newRelease && "NEW RELEASE"}
            </p>
            <p className="collection_details" id="expert_pick">
              {expertPick && "EXPERT PICK"}
            </p>

            {isProductInCart ? (
              <Link to="/cart" className="goToCart-btn">
                <button className="button">Go To Cart</button>
              </Link>
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

            {inWishlist ? (
              <AiFillHeart
                className="add-to-wishlist-icon .icon-fill"
                onClick={() => handleRemoveFromWishlist(_id, userToken)}
              />
            ) : (
              <AiOutlineHeart
                className="add-to-wishlist-icon"
                onClick={() =>
                  userToken ? handleAddToWishlist(product) : navigate("/login")
                }
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
