import React from "react";
import { BiTrash } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../Store/Slices/CartSlice";
import { LuIndianRupee } from "react-icons/lu";

const CartCard = (props) => {
  const { details } = props;
  const { qty, price, title, id, image } = details;
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
    <div className="flex justify-between items-center p-3 m-2  border-2 border-gray-400  rounded-md">
      <div className="flex items-center gap-1 w-[50%]">
        <img
          src={image}
          className="w-[150px] h-[100px] rounded-md hidden md:block"
          alt="item"
        />
        <div className="text-sm lg:text-md">
          <p>{title}</p>
          <p>Rs.{price}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-1 ">
        <button
          onClick={increaseItemQty}
          className="bg-black text-white m-2 p-1 ps-1 pe-1 font-bold rounded-md"
        >
          +
        </button>
        <p>{qty}</p>
        <button
          onClick={decreaseItemQty}
          className="bg-black text-white m-2 p-1 ps-2 pe-2 text-md font-bold rounded-md"
        >
          -
        </button>
      </div>
      <div className="flex items-center gap-1 text-sm lg:text-md">
        <p className="flex items-center">
          <LuIndianRupee />
          {parseInt(price) * parseInt(qty)}
        </p>
        <button onClick={removeItemFromCart}>
          <BiTrash className="text-red-600 hover:animate-bounce" size={25} />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
