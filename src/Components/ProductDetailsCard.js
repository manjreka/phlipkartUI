import React, { useState } from "react";

const ProductDetailsCard = () => {
  const [product, setProduct] = useState({});
  return (
    <div>
      <img src={product.images} alt="display" />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Category: {product.categoryId}</p>
      <div>
        <p>{product.discountPercentage}</p>
        <p>{product.rating}</p>
        <p>{product.stock}</p>
        <p>{product.brand}</p>
        <p>{product.availabilityStatus}</p>
        <p>{product.minimumOrderQuantity}</p>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
