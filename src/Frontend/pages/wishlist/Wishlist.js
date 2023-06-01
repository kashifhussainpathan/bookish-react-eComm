// Importing Css
import "./wishlistStyles.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Nav } from "../home/homeComponents/Nav";
import { WishlistContext } from "../../context/wishlist-context";
import { CartContext } from "../../context/cart-context";
import { AuthContext } from "../../context/auth-context";
import { ProductDetailsContext } from "../../context/product-details-context";

// Importing React Icons
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

export const Wishlist = () => {
  const { wishlistItems, handleAddToWishlist, handleRemoveFromWishlist } =
    useContext(WishlistContext);
  const { cartItems, handleChangeQuantity, handleAddToCart } =
    useContext(CartContext);
  const { userToken } = useContext(AuthContext);
  const { getProductsDetails } = useContext(ProductDetailsContext);

  const navigate = useNavigate();

  return (
    <div>
      <div>
        <Nav />

        <section className="wishlist-hero-section">
          <h1 className="wishlist-hero-section_heading">Your Wishlist</h1>
        </section>

        <section className="wishlist-products">
          {wishlistItems?.length > 0 ? (
            wishlistItems?.map((product) => {
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

              const inWishlist = wishlistItems?.some(
                (item) => item._id === product._id
              );
              const isProductInCart = cartItems?.some(
                (item) => item._id === product._id
              );

              const handleAddToWishlistClick = () => {
                if (userToken) {
                  handleAddToWishlist(product);
                } else {
                  navigate("/login");
                }
              };

              return (
                <div className="single-product" key={_id}>
                  <Link
                    to="/productdetails"
                    onClick={() => getProductsDetails(_id)}
                  >
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

                  {!isProductInCart ? (
                    <button
                      className="button"
                      onClick={() => handleAddToCart(product, userToken)}
                    >
                      Add To Cart
                    </button>
                  ) : (
                    <button
                      className="button"
                      onClick={() => handleChangeQuantity(_id, "increment")}
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
                      onClick={handleAddToWishlistClick}
                    />
                  )}
                </div>
              );
            })
          ) : (
            <div className="wishlist-empty">
              <h2> Add Something To Wishlist </h2>
              <img
                src="https://cdn.dribbble.com/users/200045/screenshots/13995181/media/2f2d2082928319cb3bcca17be3b1ecf4.gif"
                alt=""
              ></img>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
