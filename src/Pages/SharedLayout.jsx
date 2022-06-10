import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Nav-Bar";
import Sidebar from "../components/Sidebar";

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <NavBar />
        <Sidebar />
      </nav>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
