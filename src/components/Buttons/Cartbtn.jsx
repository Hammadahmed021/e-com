import React from "react";
import { NavLink } from "react-router-dom";

const Cartbtn = () => {
  return (
    <>
      <NavLink className="btn cart-btn" to="/">
        <span className="">Cart(0)</span>
      </NavLink>
    </>
  );
};
export default Cartbtn;
