import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/Slices/CartSlice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
    <div>
      <img
        src={product?.images}
        alt={product?._id}
        className=" w-[600px] h-[600px] "
      />
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <p>Category: {product?.categoryId}</p>
      <div className="flex gap-2">
        <p>{product?.discountPercentage}</p>
        <p>{product?.rating}</p>
        <p>{product?.stock}</p>
        <p>{product?.brand}</p>
        <p>{product?.availabilityStatus}</p>
        <p>{product?.minimumOrderQuantity}</p>
      </div>
      <button
        onClick={addItemToCart}
        className="bg-orange-700 text-white font-bold p-2 rounded-md m-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailsCard;
