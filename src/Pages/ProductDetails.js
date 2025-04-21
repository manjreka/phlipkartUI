import React, { useState, useEffect } from "react";
import MainLayout from "../Layout/MainLayout";
import ProductDetailsCard from "../Components/ProductDetailsCard";
import apiService from "../API/apiServices";
import { useParams } from "react-router-dom";
import { Spinner } from "reactstrap";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const { id } = params;
  const url = `/api/products/getProduct/${id}`;

  const fetchProductDetails = async () => {
    setIsLoading(true);
    const response = await apiService.getOne(url);
    setIsLoading(false);
    setProduct(response);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div>
      <MainLayout>
        {isLoading ? (
          <div className="flex justify-center items-center h-[30vh] w-[80vw] flex-wrap">
            <Spinner color="primary">Loading...</Spinner>
          </div>
        ) : (
          <ProductDetailsCard product={product} />
        )}
      </MainLayout>
    </div>
  );
};

export default ProductDetails;
