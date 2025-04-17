import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateShippingDetails } from "../../../Store/Slices/checkoutSlice";
import { setAddress } from "../../../Store/Slices/CartSlice";

const AddressCard = ({ address }) => {
  const dispatch = useDispatch();
  const addressSelected = (e) => {
    dispatch(updateShippingDetails(address));
  };

  const data = useSelector((state) => state.checkout.shippingDetails);

  useEffect(() => {
    console.log(data, "DATA");
  }, [data]);

  const selectedShipping = useSelector(
    (state) => state?.checkout.shippingDetails
  );

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-md">
      <input
        type="radio"
        id="address"
        name="address"
        onChange={addressSelected}
        checked={selectedShipping?._id === address._id}
      />
      <h2 className="text-xl font-semibold mb-2 capitalize">
        {address?.addressType} Address
      </h2>
      <div className="text-gray-700 space-y-1 text-sm">
        <p>
          <span className="font-medium">Address Line 1:</span>
          {address?.addressLine1}
        </p>
        <p>
          <span className="font-medium">Address Line 2:</span>
          {address?.addressLine2}
        </p>
        <p>
          <span className="font-medium">Street:</span> {address?.street}
        </p>
        <p>
          <span className="font-medium">City:</span> {address?.city}
        </p>
        <p>
          <span className="font-medium">State:</span> {address?.state}
        </p>
        <p>
          <span className="font-medium">Postal Code:</span>
          {address?.postalCode}
        </p>
        <p>
          <span className="font-medium">Country:</span> {address?.country}
        </p>
        <p>
          <span className="font-medium">Phone:</span> {address?.phone}
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
