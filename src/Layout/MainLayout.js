import React from "react";
import Header from "../Components/Ui/Header";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <main className="flex flex-col justify-center items-center h-full w-[95vw] m-3 flex-wrap">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
