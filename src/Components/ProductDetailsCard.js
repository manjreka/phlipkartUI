import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/Slices/CartSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaShoppingCart, FaStar } from "react-icons/fa";

import { FaTags, FaTrademark, FaWarehouse, FaBoxes } from "react-icons/fa";

const ProductDetailsCard = (props) => {
  const { product } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    //check if the user is logged in
    const token = Cookies.get("token");
    // if yes than add product to redux... indexedDB...... also show  -- product added successfully to cart
    if (token) {
      const productDetails = {
        id: product._id,
        image: product.images,
        title: product.title,
        qty: 1,
        price: product.price,
      };

      dispatch(addToCart(productDetails));
      toast.success("Product added successfully to cart");
      navigate("/");
    } else {
      // if no then redirect to login page and show an alert saying login to add products to cart
      navigate("/login");
      toast.error("Login to add product to cart");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <img
        src={product?.images}
        alt={product?._id}
        className=" w-[400px] h-[400px] self-center"
      />
      <h1 className="font-bold text-2xl">{product?.title}</h1>
      <p className="font-semibold text-lg text-gray-600">
        Description: {product?.description}
      </p>

      <p className="font-semibold text-lg text-gray-800">
        Category: {product?.categoryId}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-xl">
        {[
          {
            label: "Discount",
            value: `${product?.discountPercentage}%`,
            icon: <FaTags className="text-pink-500 text-xl" />,
            bg: "bg-pink-50",
          },
          {
            label: "Rating",
            value: product?.rating,
            icon: <FaStar className="text-yellow-500 text-xl" />,
            bg: "bg-yellow-50",
          },
          {
            label: "Brand",
            value: product?.brand,
            icon: <FaTrademark className="text-blue-500 text-xl" />,
            bg: "bg-blue-50",
          },
          {
            label: "In Stock",
            value: product?.availabilityStatus,
            icon: <FaWarehouse className="text-green-500 text-xl" />,
            bg: "bg-green-50",
          },
          {
            label: "Min Order Qty",
            value: product?.minimumOrderQuantity,
            icon: <FaBoxes className="text-purple-500 text-xl" />,
            bg: "bg-purple-50",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 p-2 m-3 rounded-2xl shadow-md transform hover:scale-[1.03] hover:shadow-lg transition duration-300 ${item.bg}`}
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <div className="text-sm text-gray-500">{item.label}</div>
              <div className="text-lg font-bold text-gray-800">
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={addItemToCart}
        className="bg-orange-600 hover:bg-orange-700 flex justify-center items-center gap-2 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Add to Cart{" "}
        <span>
          <FaShoppingCart className="animate-ping" size={20} />
        </span>
      </button>
    </div>
  );
};

export default ProductDetailsCard;
