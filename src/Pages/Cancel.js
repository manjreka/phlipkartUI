import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import Lottie from "lottie-react";

const Cancel = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-red-50 px-4">
      {/* <Lottie animationData={failAnim} loop={false} style={{ height: 200 }} /> */}

      <FaTimesCircle className="text-red-600 text-6xl animate-bounce mt-4 mb-2" />

      <h1 className="text-3xl font-bold text-red-700 mb-2">Payment Failed</h1>

      <p className="text-gray-700 text-center max-w-md">
        Oops! Something went wrong during the payment process. Please try again
        or contact support if the issue persists.
      </p>

      <button className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition">
        Try Again
      </button>
    </div>
  );
};

export default Cancel;
