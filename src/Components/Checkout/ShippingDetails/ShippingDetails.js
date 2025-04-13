import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ShippingDetailsForm from "../ShippingDetails/ShippingDetailsForm";
import AddressCard from "../ShippingDetails/AddressCard";
import NoAddressFoundCard from "../ShippingDetails/NoAddressFoundCard";
import PrivateApiServices from "../../../API/privateApiServices";

const ShippingDetails = () => {
  const [userAddress, setUserAddress] = useState([]);

  const fetchData = async () => {
    const url = "/api/address/getAddresses";
    const response = await PrivateApiServices.getAll(url);
    console.log(response, "++++++++++");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>ShippingDetails</h1>
      <div className="flex justify-center items-center w-[100vw]">
        <button className="border-2 p-2 m-2 bg-blue-700 text-white rounded-md flex gap-1 ">
          <IoMdAdd size={25} />
          <span className="font-medium"> Add Address</span>
        </button>
      </div>
      <ShippingDetailsForm />
      {userAddress?.length === 0 ? (
        <NoAddressFoundCard />
      ) : (
        <ul>
          {userAddress?.map((address) => (
            <AddressCard key={address._id} details={address} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShippingDetails;
