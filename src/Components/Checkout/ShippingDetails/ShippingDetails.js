import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ShippingDetailsForm from "../ShippingDetails/ShippingDetailsForm";
import AddressCard from "../ShippingDetails/AddressCard";
import NoAddressFoundCard from "../ShippingDetails/NoAddressFoundCard";
import PrivateApiServices from "../../../API/privateApiServices";

const ShippingDetails = ({
  increamentStep,
  decreamentStep,
  update,
  checkoutInfo,
}) => {
  const [showForm, setshowForm] = useState(false);
  const [userAddress, setUserAddress] = useState(null); // list of address
  const dev = false;

  const fetchData = async () => {
    const url = "/api/address/getAddresses";
    // const url = "http://localhost:1414/api/address/getAddresses";
    const response = await PrivateApiServices.getAll(url, dev);
    setUserAddress(response);
  };

  const toggleAddressButton = () => {
    setshowForm((prevState) => !prevState);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-5  w-[80vw]">
      <h1 className="font-bold mb-3  text-xl">ShippingDetails</h1>

      {showForm && (
        <ShippingDetailsForm toggleAddressButton={toggleAddressButton} />
      )}
      {userAddress?.length === 0 && !showForm ? (
        <div className="flex flex-col justify-center items-center border border-dashed rounded-2xl bg-gray-50 shadow-sm pb-3">
          <NoAddressFoundCard />
          <button
            onClick={toggleAddressButton}
            className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            Add New Address
          </button>
        </div>
      ) : (
        <ul className="flex justify-center items-center flex-wrap gap-5 mb-3">
          {userAddress?.map((address) => (
            <AddressCard
              key={address._id}
              address={address}
              // update={update}
              // selectedAddressId={checkoutInfo.shippingData._id}
            />
          ))}
        </ul>
      )}

      <div className="flex justify-between items-center mt-5 ">
        <button
          onClick={decreamentStep}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          previous
        </button>
        <button
          onClick={increamentStep}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default ShippingDetails;
