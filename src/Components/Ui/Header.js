import React, { useState } from "react";
import { FaShopware } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiLogout } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import PrivateApiServices from "../../API/privateApiServices";

const Header = () => {
  const items = useSelector((state) => state.cart.items);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen((prevstate) => !prevstate);
  };

  const handleCheckout = async () => {
    // "/api/cart/configureCart";
    const url = "http://localhost:1414/api/cart/configureCart";

    const cartItemsInfo = items.map((each) => ({
      productId: each.id,
      quantity: each.qty,
    }));

    const response = await PrivateApiServices.create(url, cartItemsInfo, true);

    if (response === "Cart updated successfully!!") {
      return true;
    } else {
      return false;
    }
  };

  const logoutUser = async () => {
    const success = await handleCheckout();
    if (success) {
      Cookies.remove("token");
      navigate("/");
    }
  };

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <nav className="flex justify-between items-center p-3">
        <a className="flex gap-2 items-center" href="/">
          <FaShopware size={30} color="blue" />
          <span className="font-bold text-2xl">Shoppie</span>{" "}
        </a>
        <div className="md:flex gap-3 font-medium hidden">
          <Link to="/">
            <p>Product</p>
          </Link>
          <Link to="/cart">
            <p className="relative inline-block">
              Cart{" "}
              <span className="absolute -top-2 -right-2 text-xs bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems?.length}
              </span>
            </p>
          </Link>
          <Link to="/order">
            <p>Order</p>
          </Link>
        </div>
        <div className="md:flex gap-3 font-medium hidden">
          <p>
            <IoPerson size={25} />
          </p>
          <button onClick={logoutUser}>Logout</button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <GiHamburgerMenu color="grey" size={25} />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden p-2 ms-2 me-2 bg-slate-50">
          <Link to="/">
            <p className="mb-2 text-gray-700 font-medium hover:text-blue-600">
              Product
            </p>
          </Link>
          <Link to="/cart">
            <p className="mb-2 relative inline-block  text-gray-700 font-medium hover:text-blue-600">
              Cart{" "}
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                4
              </span>
            </p>
          </Link>
          <Link to="/order">
            <p className="mb-2  text-gray-700  font-medium hover:text-blue-600">
              Order
            </p>
          </Link>

          <hr />
          <div className="flex justify-between  text-gray-700 mt-2">
            <p className="mb-2 font-medium hover:text-blue-600">Profile</p>
            <button
              onClick={logoutUser}
              className="mb-2 flex gap-2 items-center font-medium hover:text-blue-600"
            >
              <HiLogout size={25} /> <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
