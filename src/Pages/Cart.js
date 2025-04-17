import React from "react";
import CartCard from "../Components/CartCard";
import { useSelector, useDispatch } from "react-redux";
import MainLayout from "../Layout/MainLayout";
import { clearCart } from "../Store/Slices/CartSlice";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
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

      <button
        onClick={() => {
          navigate("/checkout");
        }}
        className="bg-green-700 p-2 m-2 text-white rounded-md font-bold "
      >
        Chcekout
      </button>
    </MainLayout>
  );
};

export default Cart;
