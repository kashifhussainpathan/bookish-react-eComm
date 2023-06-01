import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";

import { CartContext } from "../../../context/cart-context";
import { WishlistContext } from "../../../context/wishlist-context";
import { AuthContext } from "../../../context/auth-context";

// Importing React Icons
// import { BiSearch } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

// Importing logo
import logo from "../../../assets/logo.png";

export const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useContext(CartContext);
  const { wishlistItems } = useContext(WishlistContext);
  const { userToken } = useContext(AuthContext);

  const totalCartItems = cartItems.length;
  const totalWishlistItems = wishlistItems.length;

  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(!isMenuOpen);
    }
  };

  return (
    <nav className="navigation">
      <div className="logo">
        <NavLink to="/">
          {" "}
          <img src={logo} alt="logo" />
        </NavLink>
        <h2>
          {" "}
          <NavLink to="/">BOOKISH </NavLink>{" "}
        </h2>
      </div>

      <div className="nav-hamburger" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>

      <div className={`navigation_right_side ${isMenuOpen ? "show" : ""}`}>
        {/* <p>
          {" "}
          <NavLink to="/products">
            <BiSearch />
          </NavLink>
        </p> */}

        <NavLink to="/products">
          {" "}
          <p>
            <AiOutlineShopping />
          </p>{" "}
        </NavLink>

        <NavLink to="/wishlist">
          {" "}
          <p className="nav-icon">
            <AiOutlineHeart />
            <div>{userToken ? totalWishlistItems : 0}</div>
          </p>{" "}
        </NavLink>

        <NavLink to="/cart">
          <p className="nav-icon">
            <BiCartAlt />
            <div>{userToken ? totalCartItems : 0}</div>
          </p>
        </NavLink>

        {userToken ? (
          <NavLink to="/profile/details">
            <p>
              <IoPersonCircleOutline />
            </p>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <p>
              <IoPersonCircleOutline />
            </p>
          </NavLink>
        )}
      </div>
    </nav>
  );
};
