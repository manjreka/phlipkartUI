import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import { ShieldCheck, Star, Truck, RefreshCw, Lock } from "lucide-react";
import { RiSecurePaymentFill, RiSecurePaymentLine } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";
import useBillingDetails from "../../../Hooks/useBillingDetails";
import { FaRupeeSign } from "react-icons/fa";

const KEY = process.env.REACT_APP_KEY;

const PaymentDetails = ({ decreamentStep }) => {
  const products = useSelector((state) => state.cart.items);
  const address = useSelector((state) => state.checkout.shippingDetails);

  const details = {
    products,
    shippingAddress: address._id,
  };
  const token = Cookies.get("token");

  const { grandTotal = 0 } = useBillingDetails(products) || {};

  const makePayment = async () => {
    const stripe = await loadStripe(KEY);

    const url = "https://ecommserver-iw07.onrender.com/api/payment/pay";
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(details),
    };

    const response = await fetch(url, option);
    const data = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: data.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  };
  return (
    <div className="p-5 w-[80vw]">
      <div className="flex flex-col justify-center items-center gap-2 mb-2">
        <p className="text-3xl font-semibold">Complete Your Purchase</p>
        <p className="font-semibold">Secure Checkout with Stripe</p>
      </div>

      <p className="text-center text-3xl font-bold text-gray-800 flex items-center justify-center gap-1 m-3">
        <FaRupeeSign className="text-3xl" />
        {grandTotal}
      </p>

      <div className="flex justify-center gap-5 rounded-md text-center m-3 p-3">
        <div className="flex flex-col items-center">
          <p className="text-center  bg-cyan-100 p-2 rounded-full ">
            <RiSecurePaymentFill size={30} />{" "}
          </p>
          <p className="text-xs md:text-sm lg:text-md">Secure Payment</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center  bg-cyan-100 p-2 rounded-full ">
            <FaTruck size={30} />{" "}
          </p>
          <p className="text-xs md:text-sm lg:text-md">Free Delivery</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-center  bg-cyan-100 p-2 rounded-full ">
            <CiClock1 size={30} />{" "}
          </p>
          <p className="text-xs md:text-sm lg:text-md">30-Days Return</p>
        </div>
      </div>

      <div className="flex justify-center ">
        <button
          onClick={makePayment}
          className="bg-blue-500 flex justify-center items-center gap-2 w-[35vw] text-white font-semibold  p-2 m-2 rounded-md"
        >
          <span>Pay with Strip </span>
          <FaLongArrowAltRight size={25} />
        </button>
      </div>

      <div className="flex justify-center items-center m-3 p-2 gap-2">
        <p className="w-[45px] h-[25px] bg-blue-700 rounded-sm" />
        <p className="w-[45px] h-[25px] bg-orange-500 rounded-sm" />
        <p className="w-[45px] h-[25px] bg-indigo-900 rounded-sm" />
        <p className="w-[45px] h-[25px] bg-yellow-500 rounded-sm" />
        <p className="w-[45px] h-[25px] bg-cyan-500 rounded-sm" />
      </div>

      <div className="p-4 bg-white flex justify-center flex-col items-center  space-y-4">
        <div className="space-y-1 text-sm text-gray-700">
          <div className="flex items-center gap-2 font-semibold text-base">
            <Star className="text-yellow-500 w-5 h-5" />
            4.9/5 rating from 2,300+ customers
          </div>
          <p className="italic text-gray-600">
            "Excellent checkout experience, quick delivery, and quality
            products!"
          </p>
          <p className="text-xs text-gray-400">– Sarah M., Verified Buyer</p>
        </div>

        <ul className="space-y-2 text-sm text-gray-700 ">
          <li className="flex items-center gap-2">
            <ShieldCheck className="text-green-500 w-5 h-5" />
            2-year warranty on all products
          </li>
          <li className="flex items-center gap-2">
            <Truck className="text-blue-500 w-5 h-5" />
            Free shipping on all orders
          </li>
          <li className="flex items-center gap-2">
            <RefreshCw className="text-purple-500 w-5 h-5" />
            Hassle-free 30-day returns
          </li>
          <li className="flex items-center gap-2">
            <Lock className="text-gray-500 w-5 h-5" />
            Secure checkout with 256-bit encryption
          </li>
          <li className="flex items-center gap-2">
            <Star className="text-yellow-500 w-5 h-5" />
            Trusted by 10,000+ happy customers
          </li>
        </ul>

        <div className="text-sm text-gray-600 pt-2 border-t border-gray-200">
          🎉 You’re one step away from joining thousands of happy customers.
          <br />
          Your satisfaction is 100% guaranteed.
        </div>
      </div>

      <div className="flex justify-start items-center ">
        <button
          onClick={decreamentStep}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          previous
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
