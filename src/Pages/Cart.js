import React from "react";
import CartCard from "../Components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../Layout/MainLayout";
import { clearCart } from "../Store/Slices/CartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  console.log(items, "updated items in cart");

  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };

  return (
    <MainLayout>
      <ul className="flex flex-col gap-2">
        {items.map((each) => (
          <CartCard key={each.id} details={each} />
        ))}
      </ul>
      <button
        onClick={clearCartItems}
        className="bg-orange-700 p-2 m-2 text-white rounded-md font-bold "
      >
        Clear Cart
      </button>
    </MainLayout>
  );
};

export default Cart;
