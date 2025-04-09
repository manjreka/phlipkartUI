import React from "react";
import { useState } from "react";
import authServices from "../API/authApiServices";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { FaShopware } from "react-icons/fa";
import Cookies from "js-cookie";

const Login = () => {
  const [userDetails, setuserDetails] = useState({});
  const [viewPassword, setsetViewPassword] = useState(false);

  const navigate = useNavigate();

  const onRegisterUser = async () => {
    const response = await authServices.loginUser(userDetails);
    if (response.token) {
      const { token } = response;
      Cookies.set("token", token, { expires: 30 });
      navigate("/");
    }
  };
  return (
    <div className="flex flex-col gap-3 justify-center items-center h-[100vh]">
      <h1 className="text-3xl flex gap-2 items-center mb-3 text-blue-700 font-bold">
        <FaShopware size={40} /> Welcome Back to Shopie
      </h1>

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
        className="bg-orange-700 p-2 m-1 rounded-md text-white font-bold"
      >
        Register
      </button>
      <p
        onClick={() => {
          navigate("/register");
        }}
      >
        Not registered yet?
        <span className="p-2 underline text-blue-800 cursor-pointer">
          Login
        </span>
      </p>
    </div>
  );
};

export default Login;
