import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { details } = props;
  const { images, title, description, price, rating, _id } = details;
  return (
    <Link to={`/productDetails/${_id}`}>
      <div className="border-2 p-2 m-2 w-[500px] h-[500px] border-black">
        <img src={images} alt="products" className="w-[250px] h-[250px]" />
        <p>{title}</p>
        <p>{description}</p>
        <div className="flex gap-2">
          <p>{price}</p>
          <p>{rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
