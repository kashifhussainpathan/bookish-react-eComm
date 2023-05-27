import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../../../context/cart-context";
import { WishlistContext } from "../../../context/wishlist-context";
import { ProductsContext } from "../../../context/ProductsContext";

// React Icons
// import { BiSearch } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";

// importing img
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../context/auth-context";

export const ProductsNav = () => {
  const { dispatch } = useContext(ProductsContext);

  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  const { userToken } = useContext(AuthContext);

  const totalCartItems = cartItems.length;
  const totalWishlistItems = wishlistItems.length;

  return (
    <div>
      <nav className="productsNavigation">
        <div className="logo">
          <NavLink to="/" onClick={() => dispatch({ type: "CLEAR" })}>
            {" "}
            <img src={logo} alt="logo" />
          </NavLink>

          <h2>
            {" "}
            <NavLink to="/" onClick={() => dispatch({ type: "CLEAR" })}>
              BOOKISH{" "}
            </NavLink>{" "}
          </h2>
        </div>

        {/* Right Side Of Navigation */}
        <div className="navigation_right_side">
          <p>
            {" "}
            {/* <BiSearch /> */}
            <input
              onChange={(e) =>
                dispatch({ type: "SEARCH", payload: e.target.value })
              }
              className="search_bar"
              type="text"
              placeholder="Search Book Here..."
            ></input>
          </p>

          <NavLink to="/products">
            {" "}
            <p>
              <AiOutlineShopping />
            </p>{" "}
          </NavLink>

          <NavLink to="/wishlist">
            {" "}
            <p className="products-nav-icon">
              <AiOutlineHeart />
              <div>{userToken ? totalWishlistItems : 0}</div>
            </p>{" "}
          </NavLink>

          <NavLink to="/cart">
            <p className="products-nav-icon">
              <BiCartAlt />
              <div>{userToken ? totalCartItems : 0}</div>
            </p>
          </NavLink>

          <NavLink to="/profile">
            <p>
              <IoPersonCircleOutline />
            </p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
