import { createContext, useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { AuthContext } from "./auth-context";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { userToken } = useContext(AuthContext);

  const handleAddToWishlist = async (product) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      setWishlistItems(response.data.wishlist);
      toast.success("Item Added To Wishlist");
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const handleRemoveFromWishlist = async (productId, userToken) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: {
          authorization: userToken,
        },
      });
      setWishlistItems(response.data.wishlist);
      toast.success("Item Removed To Wishlist");
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  const HandleGetWishlistItems = async () => {
    try {
      const response = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: userToken,
        },
      });
      setWishlistItems(response.data.cart);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const value = {
    handleAddToWishlist,
    wishlistItems,
    handleRemoveFromWishlist,
    HandleGetWishlistItems,
  };
  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};
