import { Link } from "react-router";

function NavLink({ name, path, icon }) {
  return (
    <div>
      <li className="flex gap-5">
        {icon}
        <Link to={path}>{name}</Link>
      </li>
    </div>
  );
}

export default NavLink;
