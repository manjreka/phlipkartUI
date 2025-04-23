import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const NoAddressFoundCard = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6  text-center max-w-md mx-auto mt-10">
      <FaMapMarkerAlt className="text-4xl text-blue-500 mb-4" />
      <h2 className="text-xl font-semibold text-gray-800 mb-2">
        No Address Found
      </h2>
      <p className="text-gray-600 mb-4">
        You haven’t added any addresses yet. Please add one to continue with
        your order.
      </p>
    </div>
  );
};

export default NoAddressFoundCard;
