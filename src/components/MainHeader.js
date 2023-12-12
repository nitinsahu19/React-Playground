import React from "react";
import { NavLink } from "react-router-dom";
const MainHeader = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand nav-link" to="/welcome">
          Welcome Page
        </NavLink>
        <NavLink className="navbar-brand" to="/products">
          Products Page
        </NavLink>
      </nav>
    </>
  );
};

export default MainHeader;
