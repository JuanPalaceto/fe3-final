import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"
import { Outlet } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Layout = () => {
  const {state} = useContextGlobal();

  return (
    <div className={state.theme}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;