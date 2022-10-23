import React, { useState } from "react";
import Menubar from "./Menubar";
import NavItems from "./NavItems";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-white z-[3000]">
        <Menubar toggler={() => setOpen(!open)} />
        <NavItems isOpened={open} toggler={() => setOpen(!open)} />
      </nav>
    </header>
  );
};

export default Header;
