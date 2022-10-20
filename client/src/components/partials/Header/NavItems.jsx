import React from "react";
import {
  Calling,
  CandyMenu,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Whatsapp,
  YouTube,
} from "../../commons/Icons";

const NavLinks = () => {
  const links = ["home", "about", "shop", "blog", "our team", "contact"];
  return (
    <ul className="flex flex-col sm:flex-row items-center font-Quicksand font-bold text-black-01 gap-2">
      {links.map((link, index) => {
        return (
          <li className="" key={index}>
            <a
              href=""
              className="block p-2 sm:px-2 sm:py-0 hover:text-green-01 capitalize"
            >
              {link}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

const BrowseBtn = () => {
  return (
    <button className="hidden lg:flex items-center gap-3 font-Quicksand font-bold text-white bg-green-01 p-3 rounded candy-menu">
      <CandyMenu />
      <span className="capitalize">browse all categories</span>
      <ChevronDown />
    </button>
  );
};

const NetWorks = () => {
  const netWorks = [
    <Facebook />,
    <Twitter />,
    <Instagram />,
    <YouTube />,
    <Whatsapp />,
  ];
  return (
    <div className="flex items-center gap-5">
      <div className="hidden md:flex items-center gap-2 text-black-01">
        {netWorks.map((network, index) => {
          return (
            <a href="" className="hover:text-green-01" key={index}>
              {network}
            </a>
          );
        })}
      </div>

      <div className="hidden sm:flex items-center gap-2 text-black-01 border-solid border-l-[0.5px] border-l-gray-01 pl-3">
        <Calling />
        <div>
          <p className="text-lg font-semibold">(406) 555-0120</p>
          <p className=" text-[10px] text-gray-01">Mon - Fri: 9:00-20:00</p>
        </div>
      </div>
    </div>
  );
};

const NavItems = (props) => {
  return (
    <>
      <div
        className={`container-custom ${
          props.isOpened ? "flex" : "hidden sm:flex"
        } items-center justify-between gap-2 py-4`}
      >
        <BrowseBtn />
        <NavLinks />
        <NetWorks />
      </div>
      <div className="bottom-line"></div>
    </>
  );
};

export default NavItems;
