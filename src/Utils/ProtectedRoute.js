import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");
  if (token) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default ProtectedRoute;
