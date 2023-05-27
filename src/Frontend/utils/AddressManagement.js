import React, { useState } from "react";

const AddressManagement = ({ checkout, profile }) => {
  const [addresses, setAddresses] = useState([
    {
      name: "John Doe",
      address: "123 Main St",
      city: "City",
      state: "State",
      zip: "12345",
    },
    {
      name: "Jane Smith",
      address: "456 Elm St",
      city: "City",
      state: "State",
      zip: "67890",
    },
  ]);

  const [showAddAddress, setShowAddAddress] = useState(false);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [editIndex, setEditIndex] = useState(-1);
  const [newAddress, setNewAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleAddAddress = () => {
    setShowAddAddress(true);
  };

  const validateAddress = () => {
    for (const key in newAddress) {
      if (newAddress[key].trim() === "") {
        return false;
      }
    }
    return true;
  };

  const handleSaveAddress = () => {
    if (!validateAddress()) {
      return;
    }

    if (editIndex === -1) {
      setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    } else {
      setAddresses((prevAddresses) => {
        const updatedAddresses = [...prevAddresses];
        updatedAddresses[editIndex] = newAddress;
        return updatedAddresses;
      });
      setEditIndex(-1);
    }

    setNewAddress({
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
    setShowAddAddress(false);
  };

  const handleEditAddress = (index) => {
    setEditIndex(index);
    setNewAddress(addresses[index]);
    setShowAddAddress(true);
  };

  const handleDeleteAddress = (index) => {
    setAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses];
      updatedAddresses.splice(index, 1);
      return updatedAddresses;
    });
  };

  const handleSelectAddress = (index) => {
    setSelectedAddressIndex(index);
    setShowAddAddress(false);
  };

  return (
    <div>
      <h2> {!checkout && "Address"}</h2>

      {!showAddAddress && (
        <button className="button" onClick={handleAddAddress}>
          Add Address
        </button>
      )}

      {showAddAddress && (
        <>
          <h3>Add/Edit Address</h3>

          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={newAddress.name}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={newAddress.address}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              City:
              <input
                type="text"
                name="city"
                value={newAddress.city}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              State:
              <input
                type="text"
                name="state"
                value={newAddress.state}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              ZIP:
              <input
                type="text"
                name="zip"
                value={newAddress.zip}
                onChange={handleChange}
              />
            </label>
          </div>

          <button className="button" onClick={handleSaveAddress}>
            {editIndex === -1 ? "Save Address" : "Update Address"}
          </button>
          <button className="button" onClick={() => setShowAddAddress(false)}>
            Cancel
          </button>
        </>
      )}

      {addresses.map((address, index) => (
        <div key={index} className="address-details">
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
            <b>City :</b> {address.city}, <b>State :</b> {address.state},{" "}
            <b>ZIP :</b> {address.zip}
          </div>
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
      ))}
    </div>
  );
};

export default AddressManagement;
