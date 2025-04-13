import React, { useEffect, useState } from "react";
import BaseLayout from "../Layout/BaseLayout";
import ProductCard from "../Components/ProductCard";
import apiService from "../API/apiServices";

const Home = () => {
  const [product, setProduct] = useState([]);

  const fetchData = async () => {
    const url = "/api/products/getProducts";
    const response = await apiService.getAll(url);
    setProduct(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BaseLayout className="mt-auto max-w-[65vw]">
      <ul className="flex flex-wrap">
        {product.map((each) => (
          <ProductCard key={each._id} details={each} />
        ))}
      </ul>
    </BaseLayout>
  );
};

export default Home;
