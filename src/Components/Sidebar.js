import React from "react";
import { BiSolidCategory, BiSolidOffer } from "react-icons/bi";
import { LuArrowLeftToLine, LuArrowRightFromLine } from "react-icons/lu";
import { MdInventory } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";

const Sidebar = ({ toggleSidebar, isOpen }) => {
  return (
    <div
      className={`flex flex-col gap-3 border-2 m-3  rounded-2xl border-black h-fit  p-3 ${
        isOpen ? "w-[25vw] min-w-fit" : "w-fit"
      } `}
    >
      <p className="justify-end flex" onClick={toggleSidebar}>
        {isOpen ? (
          <LuArrowLeftToLine size={25} />
        ) : (
          <LuArrowRightFromLine size={25} />
        )}
      </p>

      <div>
        <p className={`${isOpen ? "inline" : "hidden"} font-medium`}>Price</p>
        <RiMoneyRupeeCircleLine
          className={`${isOpen ? "hidden" : "inline"}`}
          size={25}
        />
      </div>
      <div>
        <p className={`${isOpen ? "inline" : "hidden"} font-medium`}>Stock</p>
        <MdInventory className={`${isOpen ? "hidden" : "inline"}`} size={25} />
      </div>
      <div>
        <p className={`${isOpen ? "inline" : "hidden"} font-medium`}>
          Discount
        </p>
        <BiSolidOffer className={`${isOpen ? "hidden" : "inline"}`} size={25} />
      </div>
      <div>
        <p className={`${isOpen ? "inline" : "hidden"} font-medium`}>
          Category
          <select
            name="Category"
            className="border border-gray-300 rounded-md p-2 m-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
          >
            <option value="">Select an option</option>
            <option value="electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="footware">Footware</option>
          </select>
        </p>
        <BiSolidCategory
          className={`${isOpen ? "hidden" : "inline"}`}
          size={25}
        />
      </div>
    </div>
  );
};

export default Sidebar;
