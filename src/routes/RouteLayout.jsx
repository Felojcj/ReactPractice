import React from "react";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

const RouteLayout = () => {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
};

export default RouteLayout;
