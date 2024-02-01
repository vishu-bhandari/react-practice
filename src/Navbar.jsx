import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavLink exact  activeClassName="active_class" to="/">
        About us
      </NavLink>
      <NavLink exact  activeClassName="active_class" to="/contact">Contact us</NavLink>
      <br />

      <a href="/">About Us</a>
      <a href="/contact">Contact Us</a>
    </>
  );
}

export default Navbar;
