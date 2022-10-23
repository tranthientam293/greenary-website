import React from "react";
import NavBrand from "../../commons/Navbrand/NavBrand";
import { Account, Cart, Heart, Place, Search } from "../../commons/Icons/Icons";
import { Link } from "react-router-dom";

const SearchForm = () => {
  const categories = [
    "all",
    "fruits",
    "vegetables",
    "greenery",
    "fungi",
    "groceries",
    "sweets",
    "drinks",
  ];
  return (
    <form
      action=""
      className="sm:basis-5/12 grow md:grow-0 hidden sm:flex items-center gap-3 bg-white  text-black-01 border-solid border-green-02 rounded border-[1px] px-6 py-2"
    >
      <select
        id="products-categories"
        className="hidden lg:block font-Quicksand font-bold focus:outline-none w-36 capitalize "
      >
        {categories.map((item, index) => {
          return (
            <option key={index} value={item} className="capitalize">
              {item === "all" ? `${item} categories` : item}
            </option>
          );
        })}
      </select>

      <div className="flex items-center justify-between lg:gap-3 border-l-solid lg:border-l-[0.5px] border-l-gray-01 px-3 grow">
        <input
          type="text"
          placeholder="Search..."
          className="focus:outline-none"
        />
        <button className="text-gray-01">
          <Search />
        </button>
      </div>
    </form>
  );
};

const Locator = () => {
  return (
    <div className="location-box hidden md:flex items-center gap-1 bg-white border-solid border-green-02 rounded border-[1px] px-2 py-2">
      <Place />

      <select
        name="location"
        id="location"
        className="font-Quicksand font-bold text-black-01 focus:outline-none w-36 "
      >
        <option value="all">All Categories</option>
      </select>
    </div>
  );
};

const UserFeatures = (props) => {
  const userFeatures = [
    {
      icon: <Heart />,
      text: "wishlist",
    },
    {
      icon: <Cart />,
      text: "cart",
    },
    {
      icon: <Account />,
      text: "account",
    },
  ];
  return (
    <div className="flex items-center gap-4 lg:gap-3">
      {userFeatures.map((item, index) => {
        return (
          <Link
            key={index}
            to={`/${item.text}`}
            className="flex items-center gap-2 text-base text-black-01"
          >
            {item.icon}
            <span className="hidden lg:block text-gray-01 capitalize">{item.text}</span>
          </Link>
        );
      })}

      <button
        className="flex sm:hidden flex-col items-center justify-center gap-1 w-10 h-9 border-solid border-2 border-black-01 rounded px-1 py-1"
        onClick={props.handler}
      >
        <div className="w-full h-1 bg-black-01 rounded"></div>
        <div className="w-full h-1 bg-black-01 rounded"></div>
        <div className="w-full h-1 bg-black-01 rounded"></div>
      </button>
    </div>
  );
};

const Menubar = (props) => {
  return (
    <>
      <div className=" container-custom flex items-center justify-between gap-2 py-2  relative">
        <NavBrand />
        <SearchForm />
        <Locator />
        <UserFeatures handler={props.toggler} />
      </div>
      <div className="bottom-line"></div>
    </>
  );
};

export default Menubar;
