import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const ProductCard = (props) => {
  const { details } = props;
  const { images, title, description, price, rating, _id } = details;
  return (
    <Link to={`/productDetails/${_id}`}>
      <div className="p-2 m-2">
        <img
          src={images}
          alt="products"
          className="w-[300px] h-[250px] rounded-t-md"
        />
        <div className="bg-blue-50  w-[300px] h-[200px] p-2">
          <div className="flex justify-between ">
            <p className="flex items-center justify-center gap-1">
              <FaStar className="text-yellow-300 animate-spin" size={25} />
              {rating}
            </p>
            <p className="font-bold text-xl">{price}</p>
          </div>
          <p className="font-bold text-xl">{title}</p>
          <p className="text-md text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
