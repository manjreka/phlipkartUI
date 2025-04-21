import React from "react";
import { useState } from "react";
import authServices from "../API/authApiServices";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { FaShopware } from "react-icons/fa";
import { Spinner } from "reactstrap";

const Register = () => {
  const [userDetails, setuserDetails] = useState({});
  const [viewPassword, setsetViewPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onRegisterUser = async () => {
    setIsLoading(true);
    const response = await authServices.registerUser(userDetails);
    setIsLoading(false);

    if (response.message) {
      navigate("/login");
    }
  };
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-[100vh]">
      <h1 className="text-3xl flex gap-2 items-center mb-3 font-bold text-blue-700">
        <FaShopware size={40} /> Welcome to Shopie
      </h1>
      <input
        onChange={(e) => {
          setuserDetails((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }));
        }}
        type="text"
        name="firstName"
        placeholder="First Name"
        className="border-2 md:w-[25vw] min-w-fit w-[35vw] bg-slate-100 hover:border-blue-700 focus:outline-none  p-2 rounded-xl"
      />
      <input
        onChange={(e) => {
          setuserDetails((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }));
        }}
        type="text"
        name="lastName"
        className="border-2 md:w-[25vw]  min-w-fit  w-[35vw] bg-slate-100 hover:border-blue-700 focus:outline-none  p-2 rounded-xl"
        placeholder="Last Name"
      />
      <input
        onChange={(e) => {
          setuserDetails((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }));
        }}
        type="email"
        name="email"
        className="border-2 md:w-[25vw]  min-w-fit w-[35vw] bg-slate-100 hover:border-blue-700 focus:outline-none  p-2 rounded-xl"
        placeholder="Email"
      />
      <div className="border-2 md:w-[25vw] min-w-fit flex justify-between items-center w-[35vw] bg-slate-100 hover:border-blue-700 focus:outline-none  p-2 rounded-xl">
        <input
          className="bg-transparent focus:outline-none "
          onChange={(e) => {
            setuserDetails((prevState) => ({
              ...prevState,
              [e.target.name]: e.target.value,
            }));
          }}
          type={`${viewPassword ? "text" : "password"}`}
          name="password"
          placeholder="Password"
        />
        <p onClick={() => setsetViewPassword((prevState) => !prevState)}>
          {viewPassword ? <VscEye /> : <VscEyeClosed />}
        </p>
      </div>

      <button
        onClick={onRegisterUser}
        disabled={isLoading}
        className="bg-orange-700 p-2 m-1 rounded-md text-white font-bold"
      >
        {isLoading ? (
          <>
            <Spinner color="primary"> Loading...</Spinner>
            <span>Loading...</span>
          </>
        ) : (
          "Register"
        )}
      </button>
      <p
        onClick={() => {
          navigate("/login");
        }}
      >
        Already have an account?
        <span className="p-2 underline text-blue-800 cursor-pointer">
          Login
        </span>
      </p>
    </div>
  );
};

export default Register;
