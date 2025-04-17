import React, { useEffect, useState } from "react";
import PrivateApiServices from "../../../API/privateApiServices";
import { toast } from "react-toastify";

const defaultAddress = {
  addressLine1: "",
  addressLine2: "",
  addressType: "",
  city: "",
  country: "",
  postalCode: "",
  state: "",
  street: "",
  phone: "",
};
const ShippingDetailsForm = (props) => {
  const { toggleAddressButton } = props;
  const [addressDetails, setaddressDetails] = useState(defaultAddress);

  const handleChnage = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setaddressDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmitAddress = (e) => {
    e.preventDefault();
    saveDetails(addressDetails);
  };

  const createAddress = async (userAddress) => {
    // const url = "/api/address/addAddress";
    const dev = true;
    const url = " http://localhost:1414/api/address/addAddress";
    const response = await PrivateApiServices.create(url, userAddress, dev);
    setaddressDetails(defaultAddress);
    toast.success(response);
    toggleAddressButton();
  };

  const saveDetails = (details) => {
    createAddress(details);
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={onSubmitAddress}
        className=" bg-slate-200 rounded-xl p-4 m-2"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-3 w-[80vw] ">
          <div className="grid grid-cols-1 gap-y-0 ">
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              name="addressLine1"
              id="addressLine1"
              value={addressDetails.addressLine1}
              onChange={handleChnage}
            />
          </div>
          <div className="grid grid-cols-1 gap-y-0">
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              onChange={handleChnage}
              type="text"
              name="addressLine2"
              value={addressDetails.addressLine2}
              id="addressLine2"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-0">
            <label htmlFor="street">Street</label>
            <input
              onChange={handleChnage}
              value={addressDetails.street}
              type="text"
              name="street"
              id="street"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-0">
            <label htmlFor="city">City</label>
            <input
              onChange={handleChnage}
              value={addressDetails.city}
              type="text"
              name="city"
              id="city"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-0">
            <label htmlFor="state">State</label>
            <input
              onChange={handleChnage}
              value={addressDetails.state}
              type="text"
              name="state"
              id="state"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-0">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              onChange={handleChnage}
              value={addressDetails.postalCode}
              type="text"
              name="postalCode"
              id="postalCode"
            />
          </div>
          <div className="grid grid-cols-1 gap-y-0">
            <label htmlFor="country">Country</label>
            <input
              onChange={handleChnage}
              value={addressDetails.country}
              type="text"
              name="country"
              id="country"
            />
          </div>

          <div className="grid grid-cols-1 gap-y-0">
            <label htmlFor="phone">Contact Number</label>
            <input
              onChange={handleChnage}
              value={addressDetails.phone}
              type="text"
              name="phone"
              id="phone"
            />
          </div>

          <div className="grid grid-cols-1 gap-y-0">
            <label htmlFor="addressType">Address Type</label>
            <input
              onChange={handleChnage}
              value={addressDetails.addressType}
              type="text"
              name="addressType"
              id="addressType"
            />
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button
            type="submit"
            className="border-2 p-2 m-2 bg-blue-700 text-white rounded-md font-medium"
          >
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingDetailsForm;

// api call -- create address
// show loader when creating and also change btn text to saving
// close the form and show add address text
