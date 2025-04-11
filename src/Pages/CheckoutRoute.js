import React, { useState } from "react";
import ProductsBillingDetails from "../Components/ProductsBillingDetails";
import ShippingDetails from "../Components/ShippingDetails";
import PaymentDetails from "../Components/PaymentDetails";
import OrderReview from "../Components/OrderReview";
import OrderSuccessCard from "../Components/OrderSuccessCard";

const CheckoutRoute = () => {
  const [step, setStep] = useState(1);

  const increamentStep = () => {
    setStep((prevState) => prevState + 1);
  };
  const decreamentStep = () => {
    setStep((prevState) => prevState + 1);
  };

  switch (step) {
    case 1:
      return <ProductsBillingDetails increamentStep={increamentStep} />;
    case 2:
      return (
        <ShippingDetails
          increamentStep={increamentStep}
          decreamentStep={decreamentStep}
        />
      );
    case 3:
      return (
        <PaymentDetails
          increamentStep={increamentStep}
          decreamentStep={decreamentStep}
        />
      );
    case 4:
      return (
        <OrderReview
          increamentStep={increamentStep}
          decreamentStep={decreamentStep}
        />
      );
    case 5:
      return <OrderSuccessCard />;
    default:
      return <div>Something went wrong</div>;
  }
};

export default CheckoutRoute;

/*
Common Things to Show on /order Page:

✅ 2. Shipping Address
Name

Address

City, State, Zip

Phone Number / Email

✅ 3. Payment Details
Payment method (e.g., Credit Card, UPI, Cash on Delivery)

Transaction ID (if online)

Total paid

✅ 4. Items Ordered
For each item:

Product name

Product image

Quantity

Unit price

Total price for that item

✅ 5. Price Breakdown
Subtotal

Shipping charges

Discounts / Coupons (if any)

Taxes

Grand total

✅ 6. Actions (Optional)
Cancel order (if within a time limit)

Download invoice

Track shipment

Return / Replace item

🧠 Bonus Features (optional but useful):
Estimated delivery date

Delivery partner and tracking number

Order status tracker (progress bar or steps: Ordered → Shipped → Delivered)

*/
