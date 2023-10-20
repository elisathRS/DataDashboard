import React from 'react';
import { Outlet, Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
);

}

export default SideNav;