import React from "react";

const ProductCard = (props) => {
  const { details } = props;
  const { images, title, description, price, rating } = details;
  return (
    <div className="border-2 p-2 m-2 w-fit h-fit border-black">
      <img src={images} alt="" />
      <p>{title}</p>
      <p>{description}</p>
      <div className="flex gap-2">
        <p>{price}</p>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
