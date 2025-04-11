import React, { useMemo } from "react";

const TAX_PERCENT = 0.18;
const DELIVERY_CHARGE = 85;

const useBillingDetails = (cartProducts) => {
  const billing = useMemo(() => {
    const subtotal = cartProducts.reduce((acc, curVal) => {
      const value = acc + parseInt(curVal.qty) * parseInt(curVal.price);
      return value;
    }, 0);

    const tax = subtotal * TAX_PERCENT;

    const grandTotal = subtotal + tax + DELIVERY_CHARGE;

    return { subtotal, tax, deliveryAmt: DELIVERY_CHARGE, grandTotal };
  }, [cartProducts]);

  return billing;
};

export default useBillingDetails;
