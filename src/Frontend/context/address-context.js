import { createContext, useState } from "react";

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [orderHistory, setOrderHistory] = useState([]);

  const [addresses, setAddresses] = useState([
    {
      name: "John Doe",
      address: "1270 Winchester Blvd",
      city: "San Jose",
      state: "California",
      postalCode: "95128",
      mobileNum: "987654321",
      optMobileNum: "123456789",
    },
    {
      name: "Jane Smith",
      address: "225 Logan Ave S",
      city: "Renton",
      state: "Washington",
      postalCode: "98055",
      mobileNum: "9988776655",
      optMobileNum: "123456789",
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
    postalCode: "",
    mobileNum: "",
    optMobileNum: "",
  });

  const selectedAddress = addresses[selectedAddressIndex];

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
      if (key !== "optMobileNum" && newAddress[key].trim() === "") {
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
      postalCode: "",
      mobileNum: "",
      optMobileNum: "",
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

  const handleCancel = () => {
    setEditIndex(-1);
    setNewAddress({
      name: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      mobileNum: "",
      optMobileNum: "",
    });
    setShowAddAddress(false);
  };

  const value = {
    addresses,
    setAddresses,
    showAddAddress,
    setShowAddAddress,
    selectedAddressIndex,
    setSelectedAddressIndex,
    editIndex,
    setEditIndex,
    newAddress,
    setNewAddress,
    handleChange,
    handleAddAddress,
    validateAddress,
    handleSaveAddress,
    handleEditAddress,
    handleDeleteAddress,
    handleSelectAddress,
    selectedAddress,
    setOrderHistory,
    orderHistory,
    handleCancel,
  };
  return (
    <AddressContext.Provider value={value}>{children}</AddressContext.Provider>
  );
};
