import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export const CartBill = () => {
  const { cartItems } = useContext(CartContext);

  const priceBeforeDiscount = Math.round(
    cartItems.reduce((acc, curr) => acc + Number(curr.prevPrice * curr.qty), 0)
  );

  const actualPrice = Math.round(
    cartItems.reduce((acc, curr) => acc + Number(curr.price * curr.qty), 0)
  );

  const discountedPrice = priceBeforeDiscount - actualPrice;

  const deliveryCharge = 50;

  const grandTotal = Math.round(actualPrice + deliveryCharge);

  const totalItems = cartItems.length;

  const itemOrItems = totalItems > 1 ? "items" : "item";

  return (
    <div className="cart-price-details-card">
      <div>
        <p className="cart-price-details-card__heading"> PRICE DETAILS </p>

        <hr />

        <div className="price-details">
          <p>
            Price ({totalItems} {itemOrItems})
          </p>
          <p> ₹{actualPrice}</p>
        </div>
        <div className="price-details">
          <p>Discount</p>
          <p> ₹{discountedPrice}</p>
        </div>
        <div className="price-details">
          <p>Delivery Charges</p>
          <p> ₹{deliveryCharge}</p>
        </div>

        <hr />

        <div className="price-details total-amount">
          <p>TOTAL AMOUNT</p>
          <p> ₹{grandTotal}</p>
        </div>

        <hr />
        <p>You will save ₹{discountedPrice} on this order</p>

        <button className="button">Place Order</button>
      </div>
    </div>
  );
};
