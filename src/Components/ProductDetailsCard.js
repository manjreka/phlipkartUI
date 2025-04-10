import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Store/Slices/CartSlice";

const ProductDetailsCard = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const productDetails = {
      id: product._id,
      image: product.images,
      title: product.title,
      qty: 1,
      price: product.price,
    };

    dispatch(addToCart(productDetails));
  };

  const cartItems = useSelector((state) => state.cart.items);

  console.log(cartItems, "cart details");

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
