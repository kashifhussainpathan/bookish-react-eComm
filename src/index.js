import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import "./index.css";

import App from "./App";
import { ProductsDataProvider } from "./Frontend/context/ProductsDataContext";
import { ProductsContextProvider } from "./Frontend/context/ProductsContext";
import {
  CartContextProvider,
  CartContext,
} from "./Frontend/context/cart-context";
import { AuthContextProvider } from "./Frontend/context/auth-context";
import { WishlistContextProvider } from "./Frontend/context/wishlist-context";
import {
  ProductDetailsProvider,
  ProductDetailsContext,
} from "./Frontend/context/product-details-context";

// Exporting Context
export { CartContext, ProductDetailsContext };

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthContextProvider>
      <ProductsDataProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <ProductsContextProvider>
              <ProductDetailsProvider>
                <App />
              </ProductDetailsProvider>
            </ProductsContextProvider>
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductsDataProvider>
    </AuthContextProvider>
  </BrowserRouter>
  /* </React.StrictMode> */
);
