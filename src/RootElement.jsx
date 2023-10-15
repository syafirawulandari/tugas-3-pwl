import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// layout components
import NavBar from "./layouts/NavBar";
import Footer from "./layouts/Footer";

const RootElement = () => {
  return (
    <>
      <Toaster />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootElement;
