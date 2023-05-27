import "./checkoutStyles.css";

import { Nav } from "../../pages/home/homeComponents/Nav";
import AddressManagement from "../AddressManagement";
import { CartBill } from "../CartBill";

export const Checkout = () => {
  return (
    <>
      <Nav />
      <section className="checkout-section">
        <div className="checkout-address">
          <AddressManagement checkout />
        </div>

        <div className="cart-bill">
          <CartBill />
        </div>
      </section>
    </>
  );
};
