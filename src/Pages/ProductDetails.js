import React, { useState, useEffect } from "react";
import MainLayout from "../Layout/MainLayout";
import ProductDetailsCard from "../Components/ProductDetailsCard";
import apiService from "../API/apiServices";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const params = useParams();
  const { id } = params;
  const url = `/api/products/getProduct/${id}`;
  const fetchProductDetails = async () => {
    const response = await apiService.getOne(url);
    setProduct(response);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div>
      <MainLayout>
        <ProductDetailsCard product={product} />
      </MainLayout>
    </div>
  );
};

export default ProductDetails;
