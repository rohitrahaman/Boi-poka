import {
  Handshake,
  LayoutDashboard,
  MessagesSquare,
  NotebookText,
  Users,
} from "lucide-react";
import React from "react";

import NavLink from "./NavLink";

const navigation = [
  {
    id: 1,
    name: "Dashbord",
    path: "",
    icon: <LayoutDashboard />,
  },
  {
    id: 2,
    name: "Customers",
    path: "customers",
    icon: <Users />,
  },
  {
    id: 3,
    name: "All reports",
    path: "allreports",
    icon: <NotebookText />,
  },
  {
    id: 4,
    name: "Conversations",
    path: "conversations",
    icon: <MessagesSquare />,
  },
  {
    id: 5,
    name: "Deals",
    path: "deals",
    icon: <Handshake />,
  },
];
function Navbar() {
  return (
    <nav className="flex flex-col gap-5 font-semibold">
      {navigation.map((navItem) => (
        <NavLink
          key={navItem.id}
          name={navItem.name}
          path={navItem.path}
          icon={navItem.icon}
        />
      ))}
    </nav>
  );
}

export default Navbar;
