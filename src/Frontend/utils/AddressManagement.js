import React, { useContext } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import { AddressContext } from "../context/address-context";
import { stateArr } from "./StateArr";

const AddressManagement = ({ checkout, profile }) => {
  const {
    addresses,
    showAddAddress,
    setShowAddAddress,
    selectedAddressIndex,
    editIndex,
    newAddress,
    handleChange,
    handleAddAddress,
    handleSaveAddress,
    handleEditAddress,
    handleDeleteAddress,
    handleSelectAddress,
  } = useContext(AddressContext);

  return (
    <div className="address-management">
      {!showAddAddress && (
        <div className="add-address-button" onClick={handleAddAddress}>
          <div>
            <AiFillPlusSquare className="plus-icon" />
          </div>
          <p className="add-address-label">Add New Address</p>
        </div>
      )}

      {showAddAddress && (
        <>
          <h3>Add/Edit Address</h3>

          <div className="address-fields">
            <div className="address-fields-flex">
              <div>
                <label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newAddress.name}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="number"
                    name="mobileNum"
                    placeholder="Mobile No."
                    value={newAddress.mobileNum}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <div className="address-fields-flex">
              <div>
                <label>
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={newAddress.city}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div>
                <label>
                  <input
                    type="text"
                    name="postalCode"
                    placeholder="Pincode"
                    value={newAddress.postalCode}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <div>
              <label>
                <textarea
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={newAddress.address}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="address-fields-flex">
              <div>
                <label>
                  <input
                    type="number"
                    name="optMobileNum"
                    placeholder="Mobile No.(Optional)"
                    value={newAddress.optMobileNum}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div>
                <select
                  className="address_choose_state"
                  name="state"
                  value={newAddress.state}
                  onChange={handleChange}
                >
                  <option>Choose State</option>
                  {stateArr.map((el, index) => (
                    <option key={index}>{el}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            className="button update-and-cancel__button"
            onClick={handleSaveAddress}
          >
            {editIndex === -1 ? "Save Address" : "Update Address"}
          </button>
          <button
            className="button update-and-cancel__button"
            onClick={() => setShowAddAddress(false)}
          >
            Cancel
          </button>
        </>
      )}

      {addresses.map((address, index) => (
        <div
          key={index}
          className={`address-details ${
            selectedAddressIndex === index ? "selected-address" : ""
          }`}
        >
          <div
            className="address-details_radioBtn-detail"
            onClick={() => handleSelectAddress(index)}
          >
            {" "}
            <label>
              <input
                type="radio"
                name="address"
                checked={selectedAddressIndex === index}
                onChange={() => handleSelectAddress(index)}
              />
            </label>{" "}
            <div>
              <p>
                <b>Address :</b> {address.address}
              </p>{" "}
              <div className="address-details__city__state">
                {" "}
                <p>
                  {" "}
                  <b>City :</b> {address.city},{" "}
                </p>{" "}
                <p>
                  <b>State :</b> {address.state},
                </p>
              </div>
              <p>
                <b>Postal Code :</b> {address.postalCode}
              </p>
              <p>
                <b>Mobile Number :</b> {address.mobileNum}
              </p>
            </div>
          </div>

          <div>
            {!checkout && profile ? (
              <div>
                {" "}
                <button
                  className="button address-edit-button"
                  onClick={() => handleEditAddress(index)}
                >
                  Edit
                </button>
                <button
                  className="button address-edit-button"
                  onClick={() => handleDeleteAddress(index)}
                >
                  Delete
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddressManagement;
