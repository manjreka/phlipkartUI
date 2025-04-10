import React, { useState } from "react";
import { FaShopware } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiLogout } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevstate) => !prevstate);
  };

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
            <p>Cart</p>
          </Link>
          <Link to="/order">
            <p>Order</p>
          </Link>
          <Link to="/wishlist">
            <p>Whislist</p>
          </Link>
        </div>
        <div className="md:flex gap-3 font-medium hidden">
          <p>
            <IoPerson size={25} />
          </p>
          <button>Logout</button>
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
            <p className="mb-2   text-gray-700 font-medium hover:text-blue-600">
              Cart
            </p>
          </Link>
          <Link to="/order">
            <p className="mb-2  text-gray-700  font-medium hover:text-blue-600">
              Order
            </p>
          </Link>
          <Link to="/wishlist">
            <p className="mb-2  text-gray-700  font-medium hover:text-blue-600">
              Whislist
            </p>
          </Link>
          <hr />
          <div className="flex justify-between  text-gray-700 mt-2">
            <p className="mb-2 font-medium hover:text-blue-600">Profile</p>
            <button className="mb-2 flex gap-2 items-center font-medium hover:text-blue-600">
              <HiLogout size={25} /> <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
