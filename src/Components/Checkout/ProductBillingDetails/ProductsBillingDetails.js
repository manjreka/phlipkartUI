import React from "react";
import { useSelector } from "react-redux";
import { Table } from "reactstrap";
import useBillingDetails from "../../../Hooks/useBillingDetails";
import { roundToTwo } from "../../../Utils/roundToTwo";
const ProductsBillingDetails = (props) => {
  const { incrementStep } = props;

  // assuning that redux and indexedDB are rehydrated with cart details on log in
  const cartProducts = useSelector((state) => state.cart.items);

  // calculating billing details
  const {
    subtotal = 0,
    tax = 0,
    deliveryAmt = 0,
    grandTotal = 0,
  } = useBillingDetails(cartProducts) || {};

  console.log(subtotal, tax, deliveryAmt, grandTotal);

  return (
    <div>
      <h1>ProductsBillingDetails</h1>

      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item) => (
            <tr key={item.id}>
              <th scope="row">
                <img src={item.image} alt="item" className="w-[200px]" />
              </th>
              <td>{item.title}</td>
              <td>{item.qty}</td>
              <td>{item.price}</td>
              <td>{roundToTwo(parseInt(item.qty) * parseInt(item.price))}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="flex justify-end m-3">
        <div className="grid grid-cols-2 gap-y-2 w-[25vw] mt-1 text-sm">
          <span className="font-medium">Subtotal:</span>
          <span className="text-right">₹{roundToTwo(subtotal)}</span>

          <span className="font-medium">Shipping Charges:</span>
          <span className="text-right">₹{roundToTwo(deliveryAmt)}</span>

          <span className="font-medium">Tax:</span>
          <span className="text-right">₹{roundToTwo(tax)}</span>

          <div className="col-span-2 border-t border-gray-300 my-2" />

          <span className="font-bold text-base">Grand Total:</span>
          <span className="text-right font-semibold text-base">
            ₹{roundToTwo(grandTotal)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsBillingDetails;
