import React from "react";
import Header from "../Components/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <main className="flex justify-center items-center h-full m-3 flex-wrap">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
