import { NavLink } from "react-router-dom";
import {
  Calling,
  CandyMenu,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Whatsapp,
  YouTube,
} from "../../commons/Icons/Icons";

const NavLinks = (props) => {
  const links = ["home", "about", "shop", "blog", "team", "contact"];
  return (
    <ul className="flex flex-col sm:flex-row items-center font-Quicksand font-bold text-black-01 gap-2">
      {links.map((link, index) => {
        return (
          <li className="py-2" key={index} id={link}>
            <NavLink
              to={`/${link === "home" ? "" : link}`}
              end
              className={({ isActive }) => {
                const activeClass = isActive ? "active" : "";
                return `block text-sm px-2 sm:px-2 sm:py-0 hover:text-green-01 capitalize ${activeClass}`;
              }}
              onClick={props.handler}
            >
              {link === "team" ? "our team" : link}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

const BrowseBtn = () => {
  return (
    <button className="hidden lg:btn btn-primary">
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
      <div className="hidden md:flex items-center gap-3 text-black-01">
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
          <p className="para-3 font-semibold">(406) 555-0120</p>
          <p className=" text-[10px]">Mon - Fri: 9:00-20:00</p>
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
          props.isOpened ? "flex" : "hidden"
        } sm:flex items-center justify-between gap-2 py-2`}
      >
        <BrowseBtn />
        <NavLinks handler={props.toggler} />
        <NetWorks />
      </div>
      <div className="bottom-line"></div>
    </>
  );
};

export default NavItems;
