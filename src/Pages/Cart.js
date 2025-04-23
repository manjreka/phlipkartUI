import React from "react";
import CartCard from "../Components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../Layout/MainLayout";
import { clearCart } from "../Store/Slices/CartSlice";
import { useNavigate } from "react-router-dom";
import useBillingDetails from "../Hooks/useBillingDetails";
import { FiShoppingCart } from "react-icons/fi";
import PrivateApiServices from "../API/privateApiServices";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  const { subtotal } = useBillingDetails(items);

  const handleCheckout = async () => {
    const url = "/api/cart/configureCart";

    const cartItemsInfo = items.map((each) => ({
      productId: each.id,
      quantity: each.qty,
    }));

    const response = await PrivateApiServices.create(url, cartItemsInfo);

    if (response === "Cart updated successfully!!") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-between items-center w-[75vw] mb-5 ">
        <h1 className="text-lg font-bold font-sans md:text-2xl lg:text-3xl">
          Your Shopping Cart
        </h1>

        {items.length > 0 && (
          <div>
            <button
              onClick={clearCartItems}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
          <FiShoppingCart
            size={80}
            className="text-gray-400 mb-4 animate-bounce"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <ul className="flex flex-col gap-2 w-[70vw]">
          {items.map((each) => (
            <CartCard key={each.id} details={each} />
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <div className="flex flex-col items-end w-[70vw]">
          <p className="font-bold text-2xl me-2 mb-3">Total: {subtotal}/-</p>
          <div>
            <button
              onClick={async () => {
                const success = await handleCheckout();
                if (success) {
                  navigate("/checkout");
                }
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default Cart;
