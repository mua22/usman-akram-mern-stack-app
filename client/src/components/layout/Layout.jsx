import React from "react";
import MyNavBar from "./MyNavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <MyNavBar />
      {children}
    </div>
  );
};

export default Layout;
