import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import { toast } from "react-toastify";

import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { AddressContext } from "../context/address-context";

export const CartBill = () => {
  const {
    cartItems,
    discountedPrice,
    itemOrItems,
    grandTotal,
    totalItems,
    actualPrice,
    deliveryCharge,
  } = useContext(CartContext);

  const { setOrderHistory, addresses } = useContext(AddressContext);
  const navigate = useNavigate();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_llBFT4LK8Lm2fQ",
      currency: "INR",
      amount: amount * 100,
      name: "Bookish",
      description: "Thanks for purchasing",
      image: { logo },

      handler: function (response) {
        const paymentId = response.razorpay_payment_id;
        toast.success("Payment is successfull");
        localStorage.setItem("paymentId", JSON.stringify(paymentId));
        setOrderHistory(cartItems);
        navigate("/profile/orders");
      },

      prefill: {
        name: "Bookish",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handlePlaceOrder = () => {
    if (addresses.length === 0) {
      toast.error("Please add an address before placing the order");
      return;
    }

    displayRazorpay(grandTotal);
  };

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

        <button className="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};
