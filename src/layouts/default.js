import React from "react";
import { Outlet } from "react-router-dom";
import FooterBar from "../Components/partials/Dashboard/footer/FooterBar";
import Header from "../Components/partials/Dashboard/header/header";

const Default = () => {
  return (
    <>
      {/* <Sidebar /> */}
      <Header />
      <div className="main-content ">
        <Outlet />
      </div>
      <FooterBar />
    </>
  );
};

export default Default;
