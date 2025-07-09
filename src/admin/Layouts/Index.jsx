import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

function Layout() {
  return (
    <section>
      <div className="w-full  min-h-screen">
        <div className="flex w-full">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="grow mt-5 mb-5 rounded-xl ">
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Layout;
