// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";

// import BackgroundAnimation from "../Components/BackGroundAnimation/BackgroundAnimation";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      {/* <div>
        <BackgroundAnimation />
      </div> */}
    </>
  );
};

export default Layout;