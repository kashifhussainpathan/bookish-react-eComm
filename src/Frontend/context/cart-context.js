import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { AuthContext } from "./auth-context";

// import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { userToken } = useContext(AuthContext);

  const handleAddToCart = async (product, userToken) => {
    try {
      console.log("inside handle add to cart");
      const { data } = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: userToken } }
      );
      setCartItems(data.cart);
      toast.success("Item Added To Cart");
    } catch (error) {
      console.error("Printing ERROR", error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const { data } = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: userToken },
      });
      console.log(data.cart);
      setCartItems(data.cart);
      toast.success("Item Removed To Cart");
      console.log("item");
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  const handleChangeQuantity = async (productId, type) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        {
          action: {
            type: type,
          },
        },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      setCartItems(response.data.cart);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const handleGetCartItems = async () => {
    try {
      const { data } = await axios.get(`/api/user/cart`, {
        headers: {
          authorization: userToken,
        },
      });
      setCartItems(data.cart);
    } catch (error) {
      console.log(error);
    }
  };

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

  const value = {
    handleAddToCart,
    cartItems,
    handleRemoveFromCart,
    handleChangeQuantity,
    handleGetCartItems,
    discountedPrice,
    itemOrItems,
    grandTotal,
    totalItems,
    actualPrice,
    deliveryCharge,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
