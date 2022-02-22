import React from "react";
import { NavLink } from "react-router-dom";

const Cartbtn = () => {
  return (
    <>
      <NavLink className="btn btn-outline-primary" to="/">
        <span className="me-1">Cart(0)</span>
      </NavLink>
    </>
  );
};
export default Cartbtn;
