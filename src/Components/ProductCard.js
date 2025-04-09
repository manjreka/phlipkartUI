import React from "react";

const ProductCard = () => {
  return (
    <div className="border-2 p-2 m-2 w-fit h-fit border-black">
      <img src="" alt="" />
      <p>heading</p>
      <p>description</p>
      <div className="flex gap-2">
        <p>Price</p>
        <p>Discount</p>
      </div>
      <div className="flex gap-2">
        <p>Rating</p>
        <p>stock</p>
      </div>
    </div>
  );
};

export default ProductCard;
