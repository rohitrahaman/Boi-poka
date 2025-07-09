import React from "react";
import Navbar from "./Navbar";

import Searchbar from "./Searchbar";
import SidebarUser from "./SidebarUser";

function Sidebar() {
  return (
    <section>
      <div className="min-h-screen flex flex-col justify-between p-8 bg-gray-500/20">
        <div className="">
          <h1 className="font-bold uppercase mb-5">boi-poka</h1>
          <Searchbar className="mb-8" />
          <Navbar />
        </div>
        <div>
          <SidebarUser />
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
