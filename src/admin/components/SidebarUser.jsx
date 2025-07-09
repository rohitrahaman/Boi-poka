import React from "react";
import NavLink from "./NavLink";
import { LogOut, Settings } from "lucide-react";

function SidebarUser() {
  return (
    <div className="flex flex-col gap-2 font-semibold">
      <div>
        <NavLink path="/setting" name="Setting" icon={<Settings />} />
      </div>
      <div>
        <NavLink path="/Logout" name="Log-Out" icon={<LogOut />} />
      </div>
    </div>
  );
}

export default SidebarUser;
