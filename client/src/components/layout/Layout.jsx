import React from "react";
import MyNavBar from "./MyNavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children }) => {
  return (
    <div>
      <MyNavBar />
      <div className="container pt-3">{children}</div>
      <ToastContainer />
    </div>
  );
};

export default Layout;
