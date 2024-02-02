import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="menu_style">
        <NavLink exact activeClassName="active_class" to="/">
          About us
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/user">
          User 
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/service">
          Services
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact">
          Contact us
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
