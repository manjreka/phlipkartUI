import React from "react";

const ShippingDetailsForm = () => {
  return (
    <div className="flex justify-center">
      <form className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-3 w-[80vw]  bg-slate-200 rounded-xl p-4 m-2">
        <div className="grid grid-cols-1 gap-y-0 ">
          <label htmlFor="addressLine1">Address Line 1</label>
          <input type="text" name="addressLine1" id="addressLine1" />
        </div>
        <div className="grid grid-cols-1 gap-y-0">
          <label htmlFor="addressLine2">Address Line 2</label>
          <input type="text" name="addressLine1" id="addressLine1" />
        </div>
        <div className="grid grid-cols-1 gap-y-0">
          <label htmlFor="street">Street</label>
          <input type="text" name="street" id="street" />
        </div>
        <div className="grid grid-cols-1 gap-y-0">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" />
        </div>
        <div className="grid grid-cols-1 gap-y-0">
          <label htmlFor="state">State</label>
          <input type="text" name="state" id="state" />
        </div>
        <div className="grid grid-cols-1 gap-y-0">
          <label htmlFor="postalCode">Postal Code</label>
          <input type="text" name="postalCode" id="postalCode" />
        </div>
        <div className="grid grid-cols-1 gap-y-0">
          <label htmlFor="country">Country</label>
          <input type="text" name="country" id="country" />
        </div>
        <div className="grid grid-cols-1 gap-y-0">
          <label htmlFor="addressType">Address Type</label>
          <input type="text" name="addressType" id="addressType" />
        </div>
      </form>
    </div>
  );
};

export default ShippingDetailsForm;
