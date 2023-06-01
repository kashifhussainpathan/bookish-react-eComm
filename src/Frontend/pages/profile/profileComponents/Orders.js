import { useContext } from "react";
import { AddressContext } from "../../../context/address-context";
import { CartContext } from "../../../context/cart-context";

export const Orders = () => {
  const { selectedAddress, orderHistory } = useContext(AddressContext);
  const { grandTotal } = useContext(CartContext);
  const savedPaymentId = localStorage.getItem("paymentId");
  const parsedPaymentId = JSON.parse(savedPaymentId);

  const date = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString(undefined, options);
  return (
    <>
      <section className="order-section">
        {parsedPaymentId ? (
          <div>
            <div className="order-details">
              <p>
                {" "}
                <span>Payment Id : </span> {parsedPaymentId}
              </p>
              <p>
                {" "}
                <span> Total Amount :</span> ₹{grandTotal}
              </p>
              <p>
                {" "}
                <span> Order Date :</span> {formattedDate}{" "}
              </p>
              <p> Order will be delivered in 5 days </p>
            </div>

            <div className="order-address">
              {" "}
              <p> Order Address : </p>
              {selectedAddress.address},{selectedAddress.city},
              {selectedAddress.state}
              <div>
                {" "}
                <span>Mobile No :</span> {selectedAddress.mobileNum},{" "}
                <span>Postal Code : </span> {selectedAddress.postalCode}
              </div>
            </div>

            <div className="ordered-products-section">
              {orderHistory.map((order) => {
                const { _id, image, title, price, qty } = order;
                return (
                  <div key={_id} className="ordered-produts-container">
                    <div className="ordered-produts-wrapper">
                      <div className="ordered-product-img">
                        <img src={image} alt={title} />
                      </div>
                      <div className="ordered-product-details">
                        <p>
                          {" "}
                          <span> {title}</span>{" "}
                        </p>
                        <p>
                          {" "}
                          <span>Quantity : </span> {qty}
                        </p>
                        <p>
                          {" "}
                          <span>Price : </span> ₹{price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <h3> No order to display </h3>
            <img
              className="order-img"
              src="https://cdn.dribbble.com/users/200045/screenshots/13995181/media/2f2d2082928319cb3bcca17be3b1ecf4.gif"
              alt="OrderImage"
            />
          </div>
        )}
      </section>
    </>
  );
};
