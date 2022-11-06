import React from "react";
import NavBrand from "../../commons/Navbrand/NavBrand";
import { Account, Cart, Heart, Place, Search } from "../../commons/Icons/Icons";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../../context/ShoppingContext";
import useAuthContext from "../../../context/AuthContext";

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
      className="sm:basis-5/12 grow md:grow-0 hidden sm:flex items-center gap-3 bg-white  text-black-01 text-sm border-solid border-green-02 rounded border-[1px] px-6 py-2"
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

      <div className="flex items-center justify-between lg:gap-3 border-l-solid lg:border-l-[0.5px] border-l-gray-01 px-3  grow">
        <input type="text" placeholder="Search..." className="py-1" />
        <button className="text-gray-01">
          <Search />
        </button>
      </div>
    </form>
  );
};

const Locator = () => {
  return (
    <div className="shadow-02 hidden md:flex items-center gap-1 bg-white border-solid border-green-02 rounded border-[1px] px-2 py-2">
      <Place />

      <select
        name="location"
        id="location"
        className="font-Quicksand font-bold text-black-01 text-sm focus:outline-none w-36 "
      >
        <option value="all">All Categories</option>
      </select>
    </div>
  );
};

const UserFeatures = (props) => {
  const { cartItems } = useShoppingCartContext();
  const { logged } = useAuthContext();
  const user = sessionStorage.getItem("auth");
  const userFeatures = [
    {
      icon: <Heart />,
      text: "wishlist",
      path: "/wishlist",
      loggedPath: "/wishlist",
      notification: 0,
    },
    {
      icon: <Cart />,
      text: "cart",
      path: "/cart",
      loggedPath: "/cart",
      notification: cartItems.length,
    },
    {
      icon: <Account />,
      text: "account",
      path: "auth/login",
      loggedPath: "/account",
      notification: 0,
    },
  ];
  return (
    <div className="flex items-center gap-4 lg:gap-3">
      {userFeatures.map((item, index) => {
        return (
          <li className="choose" key={index}>
            <Link
              to={logged ? item.loggedPath : item.path}
              className="relavtive flex items-center gap-2 text-base text-black-01 group hover:text-green-01"
            >
              {item.icon}
              <span className="hidden xl:block text-gray-01 text-sm capitalize group-hover:text-green-01">
                {item.text}
              </span>

              {item.notification ? (
                <div className="absolute top-0 bg-green-01 text-white text-xs px-2 rounded-full translate-x-1/3 translate-y-2/3">
                  {item.notification}
                </div>
              ) : (
                ""
              )}
            </Link>
          </li>
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
      <div className="container-custom flex items-center justify-between gap-2 py-2 relative">
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
