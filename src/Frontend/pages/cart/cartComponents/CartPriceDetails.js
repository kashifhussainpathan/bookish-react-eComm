import "../cartStyles.css";
import { useContext } from "react";
import { CartContext } from "../../../context/cart-context";
import { Link } from "react-router-dom";

export const CartPriceDetails = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = Math.round(
    cartItems.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
  );

  return (
    <>
      <div className="cart-price-details-card">
        <div>
          <p className="cart-price-details-card__heading">
            CART PRICE DETAILS{" "}
          </p>

          <hr />

          <div className="cart-price-details-container">
            {cartItems.map(({ title, qty, price }) => (
              <div className="price-details">
                <p>
                  {title} ({qty})
                </p>
                <p>₹{price * qty}</p>
              </div>
            ))}
          </div>

          <hr />

          <div className="price-details total-amount">
            <p>TOTAL AMOUNT</p>
            <p> ₹{totalPrice}</p>
          </div>

          <hr />
          <Link to="/cart/checkout">
            {" "}
            <button className="button"> Checkout</button>
          </Link>
        </div>
      </div>
    </>
  );
};
