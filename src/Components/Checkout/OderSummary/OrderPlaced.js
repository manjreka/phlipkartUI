import React from "react";
import { useNavigate } from "react-router-dom";
import useBillingDetails from "../../../Hooks/useBillingDetails";
// import { format } from "date-fns";

const OrderPlaced = ({ order }) => {
  const navigate = useNavigate();

  const { selectedShipping, cartProducts } = order;

  const { subtotal, deliveryAmt, tax, grandTotal } =
    useBillingDetails(cartProducts);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">
          🎉 Order Confirmed!
        </h1>

        {/* Order Summary */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-50 p-5 rounded-lg border">
            <h2 className="text-lg font-semibold mb-3">📍 Shipping Address</h2>
            <p>{selectedShipping.addressLine1}</p>
            <p>{selectedShipping.addressLine2}</p>
            <p>{selectedShipping.street}</p>
            <p>
              {selectedShipping.city}, {selectedShipping.state} -{" "}
              {selectedShipping.postalCode}
            </p>
            <p>{selectedShipping.country}</p>
            <p className="mt-2 text-sm text-gray-500">
              Phone: {selectedShipping.phone}
            </p>
            <p className="text-sm text-gray-500">
              Type: {selectedShipping.addressType}
            </p>
          </div>

          <div className="bg-gray-50 p-5 rounded-lg border">
            <h2 className="text-lg font-semibold mb-3">🧾 Order Info</h2>
            <p>
              <span className="font-medium">Order Date:</span>{" "}
              {/* {format(new Date(selectedShipping.createdAt), "PPPpp")} */}
            </p>
            <p>
              <span className="font-medium">Status:</span> Processing
            </p>
            <p>
              <span className="font-medium">Payment:</span> Paid via Stripe
            </p>
            <p>
              <span className="font-medium">Delivery:</span> Estimated in 3–5
              days
            </p>
          </div>
        </div>

        {/* Product List */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">🛍️ Items Ordered</h2>
          <div className="divide-y border rounded-xl overflow-hidden">
            {cartProducts.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white hover:bg-gray-50 transition"
              >
                <div>
                  <p className="font-medium text-lg">{item.title}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
                </div>
                <div className="text-right sm:text-left">
                  <p className="text-sm text-gray-600">
                    Unit Price: ₹{item.price.toFixed(2)}
                  </p>
                  <p className="text-base font-semibold text-gray-800">
                    Total: ₹{(item.price * item.qty).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Summary */}
        <div className="text-right text-sm border-t pt-6 space-y-1">
          <p>
            Subtotal:{" "}
            <span className="font-medium">₹{subtotal.toFixed(2)}</span>
          </p>
          <p>
            Shipping:{" "}
            <span className="font-medium">₹{deliveryAmt.toFixed(2)}</span>
          </p>
          <p>
            Tax (10%): <span className="font-medium">₹{tax.toFixed(2)}</span>
          </p>
          <p className="text-xl font-bold pt-2">
            Total: ₹{grandTotal.toFixed(2)}
          </p>
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Need help? Contact support at help@example.com
        </p>
      </div>

      <div className="flex justify-end items-center">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="bg-orange-700 p-2 m-2 mt-3 text-white rounded-md font-bold "
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderPlaced;
