import { useState } from "react";
import { Form, Link } from "react-router-dom";
import {
  Cart,
  EditIcon,
  OrderIcon,
  RightArrow,
  SaveIcon,
} from "../components/commons/Icons/Icons";
import useAuthContext from "../context/AuthContext";
import { useShoppingCartContext } from "../context/ShoppingContext";
import picture from "/User-4.png";

const AccountView = () => {
  const { setLogged } = useAuthContext();
  const { setCartItems } = useShoppingCartContext();

  const [user, setUser] = useState({
    name: "Tran Van Name",
    address: "HCMC, Vietnam",
    gender: "Male",
    age: 18,
    quote: "A man only dies if he is forgotten",
  });

  const handleLogout = () => {
    sessionStorage.removeItem("auth");
    setCartItems([]);
    setLogged(false);
  };
  return (
    <section>
      <div className="container-custom background-vegetable py-10">
        <div className="grid sm:grid-cols-2 gap-7">
          <div className="">
            <img
              src={picture}
              alt="profile-picture"
              className="block w-1/2 aspect-[1] mx-auto sm:mx-0"
            />
          </div>

          <div className="py-5">
            <input
              type="text"
              className="font-Quicksand font-bold bg-transparent w-full text-4xl leading-normal text-black-01  border-b-red-01 border-b p-0"
              value={user.name}
              name="name"
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
            <div className="px-5 my-5 ">
              <p className="flex items-center justify-between gap-4 text-black-01 font-Quicksand font-bold">
                Address
                <input
                  type="text"
                  className="font-Lato font-normal w-1/2 text-black-01 bg-transparent text-left border-[1px] border-green-01 my-2"
                  value={user.address}
                  onChange={(e) => {
                    setUser({ ...user, address: e.target.value });
                  }}
                />
              </p>
              <p className="flex items-center justify-between gap-4 text-black-01 font-Quicksand font-bold">
                Gender
                <input
                  type="text"
                  className="font-Lato font-normal w-1/2 text-black-01 bg-transparent text-left border-[1px] border-green-01 my-2"
                  value={user.gender}
                  onChange={(e) => {
                    setUser({ ...user, gender: e.target.value });
                  }}
                />
              </p>
              <p className="flex items-center justify-between gap-4 text-black-01 font-Quicksand font-bold">
                Age
                <input
                  type="text"
                  className="font-Lato font-normal w-1/2 text-black-01 bg-transparent text-left border-[1px] border-green-01 my-2"
                  value={user.age}
                  onChange={(e) => {
                    setUser({ ...user, age: e.target.value });
                  }}
                />
              </p>
              <p className="flex items-center justify-between gap-4 text-black-01 font-Quicksand font-bold">
                Quotes:
                <input
                  type="text"
                  className="font-Lato font-normal w-1/2 text-black-01 bg-transparent text-left border-[1px] border-green-01 my-2"
                  value={user.quote}
                  onChange={(e) => {
                    setUser({ ...user, quote: e.target.value });
                  }}
                />
              </p>
            </div>

            <div className="flex gap-4 mt-10">
              <Link className="btn bg-green-01 w-fit text-white">
                <SaveIcon />
                <span className="hidden md:block">Save</span>
              </Link>
              <Link to="/cart" className="btn bg-green-01 w-fit text-white">
                <Cart />
                <span className="hidden md:block">Cart</span>
              </Link>
              <Link to="/order" className="btn bg-green-01 w-fit text-white">
                <OrderIcon />
                <span className="hidden md:block">Orders</span>
              </Link>
              <Link
                to="/"
                className="btn bg-red-01 w-fit text-white"
                onClick={handleLogout}
              >
                <RightArrow />
                <span className="hidden md:block">Log out</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountView;
