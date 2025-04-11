import React from "react";

const Order = () => {
  return <div>orders</div>;
};

export default Order;

/*
Common Things to Show on /order Page:
✅ 1. Order Summary
Order ID

Order date

Payment status (e.g., Paid / COD / Failed)

Delivery status (Pending / Shipped / Delivered / Cancelled)

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
