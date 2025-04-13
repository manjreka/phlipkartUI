import React, { useState } from "react";
import Header from "../Components/Ui/Header";

import Sidebar from "../Components/Ui/Sidebar";

const BaseLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <Header />
      <div
        className={`flex ${
          isOpen ? "flex-col items-center" : "flex-row"
        } md:flex-row md:items-start gap-5 m-2`}
      >
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        <main className="flex flex-wrap">{children}</main>
      </div>
    </div>
  );
};

export default BaseLayout;
