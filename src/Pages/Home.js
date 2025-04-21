import React, { useEffect, useState } from "react";
import BaseLayout from "../Layout/BaseLayout";
import ProductCard from "../Components/ProductCard";
import apiService from "../API/apiServices";
import { Spinner } from "reactstrap";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const url = "/api/products/getProducts";
    const response = await apiService.getAll(url);
    setIsLoading(false);
    setProduct(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BaseLayout className="mt-auto max-w-[65vw]">
      {isLoading ? (
        <div className="flex justify-center items-center h-[30vh] w-[80vw] flex-wrap">
          <Spinner color="primary">Loading...</Spinner>
        </div>
      ) : (
        <ul className="flex flex-wrap">
          {product.map((each) => (
            <ProductCard key={each._id} details={each} />
          ))}
        </ul>
      )}
    </BaseLayout>
  );
};

export default Home;
