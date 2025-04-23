import React, { useEffect, useState } from "react";
import ProductsBillingDetails from "../Components/Checkout/ProductBillingDetails/ProductsBillingDetails";
import ShippingDetails from "../Components/Checkout/ShippingDetails/ShippingDetails";
import PaymentDetails from "../Components/Checkout/Payments/PaymentDetails";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../Layout/MainLayout";
import OrderPlaced from "../Components/Checkout/OderSummary/OrderPlaced";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const steps = ["Billing", "Shipping", "Payment", "Summary"];

const Checkout = () => {
  const location = useLocation();
  const state = location.state;
  const newStep = state?.newStep;

  const selectedShipping = useSelector(
    (state) => state.checkout.shippingDetails
  );

  const cartProducts = useSelector((state) => state.cart.items);

  const data = { selectedShipping, cartProducts };

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1); // for slide animation

  const increamentStep = () => {
    setStep((prevState) => prevState + 1);
  };
  const decreamentStep = () => {
    setStep((prevState) => prevState - 1);
  };

  useEffect(() => {
    if (newStep) {
      setStep(newStep);
    }
  }, [newStep]);

  const stepComponent = () => {
    switch (step) {
      case 1:
        return <ProductsBillingDetails increamentStep={increamentStep} />;
      case 2:
        return (
          <ShippingDetails
            increamentStep={increamentStep}
            decreamentStep={decreamentStep}
          />
        );
      case 3:
        return <PaymentDetails decreamentStep={decreamentStep} />;
      case 4:
        return <OrderPlaced order={data} />;
      default:
        return <div>Something went wrong</div>;
    }
  };

  return (
    <MainLayout>
      <div className="p-4">
        <div className="mb-6">
          <div className="flex justify-center gap-4 mb-6">
            {steps.map((label, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full text-white flex items-center justify-center 
          ${step === index + 1 ? "bg-blue-600" : "bg-gray-300"}`}
                >
                  {index + 1}
                </div>
                <span
                  className={`text-sm mt-1 ${
                    step === index + 1
                      ? "text-blue-600 font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -100 }}
            transition={{ duration: 0.4 }}
          >
            {stepComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </MainLayout>
  );
};

export default Checkout;
