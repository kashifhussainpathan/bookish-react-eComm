import "./cartStyles.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { Nav } from "../home/homeComponents/Nav";
import { CartContext } from "../../context/cart-context";
import { WishlistContext } from "../../context/wishlist-context";
import { ProductDetailsContext } from "../../context/product-details-context";
import { AuthContext } from "../../context/auth-context";
import { CartPriceDetails } from "./cartComponents/CartPriceDetails";

export const Cart = () => {
  const { cartItems, handleRemoveFromCart, handleChangeQuantity } =
    useContext(CartContext);

  const { wishlistItems, handleAddToWishlist, handleRemoveFromWishlist } =
    useContext(WishlistContext);

  const { getProductsDetails } = useContext(ProductDetailsContext);

  const { userToken } = useContext(AuthContext);

  return (
    <div>
      {/* Navigation */}
      <Nav />

      {/* Hero Section */}
      <section className="cart-hero-section">
        <h1 className="cart-hero-section_heading">Your Shopping Cart</h1>
      </section>

      {cartItems.length > 0 /* Cart Products Listing */ ? (
        <div className="cart-products-details">
          {/* cart products */}

          <div className="cart-products-wrapper">
            {cartItems?.map((product) => {
              const { title, price, prevPrice, discount, _id, image, qty } =
                product;

              return (
                <div className="cart-product" key={_id}>
                  <div className="cart-product-image-and-details">
                    <Link
                      to="/productdetails"
                      onClick={() => getProductsDetails(_id)}
                    >
                      <img src={image} alt={title} />
                    </Link>

                    <div className="cart-product-details">
                      <h3>{title}</h3>

                      <h2 className="cart-product-details__price">
                        ₹{price} <span> ₹{prevPrice} </span>{" "}
                      </h2>
                      <h4>{discount}% off </h4>
                      <div className="cart-product-details-quantity-cont">
                        <span className="quantity-heading">Quantity:</span>

                        {/* Quantity Managment section */}
                        <div className="cart-card-quantity">
                          <button
                            className="decrement"
                            onClick={() =>
                              qty <= 1
                                ? handleRemoveFromCart(_id)
                                : handleChangeQuantity(_id, "decrement")
                            }
                          >
                            -
                          </button>
                          <input type="text" value={qty} readOnly />
                          <button
                            className="increment"
                            onClick={() =>
                              handleChangeQuantity(_id, "increment")
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Remove from Cart button */}
                      <div className="cart-prod-btns">
                        <button
                          onClick={() => handleRemoveFromCart(_id)}
                          className="button"
                        >
                          Remove From Cart
                        </button>

                        {/* Wishlist Button */}
                        {wishlistItems.some((item) => item._id === _id) ? (
                          <button
                            onClick={() =>
                              handleRemoveFromWishlist(_id, userToken)
                            }
                            className="button cart-product-wishlist-btn"
                          >
                            Remove From Wishlist
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAddToWishlist(product)}
                            className="button cart-product-wishlist-btn"
                          >
                            Add To Wishlist
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <CartPriceDetails />
        </div>
      ) : (
        <div className="cart-empty">
          <div className="wishlist-empty">
            <h2> Add Something To Cart </h2>
            <img
              src="https://cdn.dribbble.com/users/200045/screenshots/13995181/media/2f2d2082928319cb3bcca17be3b1ecf4.gif"
              alt=""
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};
