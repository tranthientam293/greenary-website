import React from "react";
import { Link } from "react-router-dom";

const NavBrand = () => {
  return (
    <div className="font-Quicksand text-3xl xs:text-4xl md:text-[42px] font-semibold text-black-01">
      <Link to="/" className="block h-full">
        <span className="text-green-01">Gre</span>enery
      </Link>
    </div>
  );
};

export default NavBrand;
