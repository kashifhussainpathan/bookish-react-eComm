import "./App.css";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing Pages
import { Home } from "./Frontend/pages/home/Home";
import { Products } from "./Frontend/pages/products/Products";
import { Cart } from "./Frontend/pages/cart/Cart";
import { Wishlist } from "./Frontend/pages/wishlist/Wishlist";
import { Login } from "./Frontend/pages/authentication/Login";
import { Signup } from "./Frontend/pages/authentication/Signup";
import { RequiresAuth } from "./Frontend/utils/requiresAuth";
import { Logout } from "./Frontend/pages/authentication/Logout";
import { ProductDetails } from "./Frontend/pages/productDetails/ProductDetails";
import { Profile } from "./Frontend/pages/profile/Profile";
import { Checkout } from "./Frontend/utils/checkout/Checkout";
import AddressManagement from "./Frontend/utils/AddressManagement";
import { Orders } from "./Frontend/pages/profile/profileComponents/Orders";
import { ProfileDetails } from "./Frontend/pages/profile/profileComponents/Details";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose="400"
        closeOnClick="true"
        draggable="true"
        borderRadius="10px"
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="addresses" element={<AddressManagement />} />
          <Route path="orders" element={<Orders />} />
        </Route>
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cart/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
