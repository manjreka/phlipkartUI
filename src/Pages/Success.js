import React from "react";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBillingDetails from "../Hooks/useBillingDetails";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  const [showConfetti, setShowConfetti] = useState(true);

  const cartProducts = useSelector((state) => state.cart.items);

  // calculating billing details
  const { grandTotal = 0 } = useBillingDetails(cartProducts) || {};

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/checkout", {
        state: { newStep: 4 },
      });
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col justify-center items-center min-h-[75vh] my-6 gap-3">
      {showConfetti && <Confetti />}
      <p className="md:text-5xl text-3xl font-bold text-green-700 animate-pulse mb-2">
        🎉 Payment Successful! 🎉
      </p>
      <p className="text-xl md:text-3xl text-gray-800 font-semibold flex justify-center items-center gap-1">
        <span className="text-2xl text-black">₹</span> {grandTotal}
      </p>
    </div>
  );
};

export default Success;
