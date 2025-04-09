import React from "react";

const ProductDetailsCard = (props) => {
  const { product } = props;
  return (
    <div>
      <img src={product?.images} alt={product?._id} />
      <h1>{product?.title}</h1>
      <p>{product?.description}</p>
      <p> {product?.categoryId}</p>
      <div>
        <p>{product?.discountPercentage}</p>
        <p>{product?.rating}</p>
        <p>{product?.stock}</p>
        <p>{product?.brand}</p>
        <p>{product?.availabilityStatus}</p>
        <p>{product?.minimumOrderQuantity}</p>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
