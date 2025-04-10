import React from "react";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../Store/Slices/CartSlice";

const CartCard = (props) => {
  const { details } = props;
  const { qty, price, title, id } = details;
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromCart(id));
  };

  const increaseItemQty = () => {
    dispatch(incrementQty(id));
  };

  const decreaseItemQty = () => {
    dispatch(decrementQty(id));
  };

  return (
    <div className="flex flex-col gap-2 border-1 border-black p-2 m-2 rounded-md">
      <p>
        <span className="font-bold underline">Title:</span> {title}
      </p>
      <p>
        <span className="font-bold underline">Quantity:</span>{" "}
        <button
          onClick={increaseItemQty}
          className="bg-black text-white m-2 p-1 ps-1 pe-1 font-bold rounded-md"
        >
          +
        </button>
        {qty}
        <button
          onClick={decreaseItemQty}
          className="bg-black text-white m-2 p-1 ps-2 pe-2 text-md font-bold rounded-md"
        >
          -
        </button>
      </p>
      <p>
        <span className="font-bold underline">Price:</span> {price}
      </p>
      <button onClick={removeItemFromCart}>
        <BiTrash size={25} />
      </button>
    </div>
  );
};

export default CartCard;
