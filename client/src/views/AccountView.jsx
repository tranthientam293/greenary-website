import { Link } from "react-router-dom";
import {
  Cart,
  EditIcon,
  OrderIcon,
  RightArrow,
} from "../components/commons/Icons/Icons";
import useAuthContext from "../context/AuthContext";
import { useShoppingCartContext } from "../context/ShoppingContext";
import picture from "/User-4.png";

const AccountView = () => {
  const { setLogged } = useAuthContext();
  const { setCartItems } = useShoppingCartContext();
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
            <h2 className="border-b-red-01 border-b">Tran Van Name</h2>
            <div className="px-5 my-5 ">
              <p className="flex items-center justify-between gap-4 text-black-01 font-Quicksand font-bold">
                Address
                <span className="font-Lato font-normal">HCMC, VietNam</span>
              </p>
              <p className="flex items-center justify-between gap-4 text-black-01 font-Quicksand font-bold">
                Gender<span className="font-Lato font-normal">Male</span>
              </p>
              <p className="flex items-center justify-between gap-4 text-black-01 font-Quicksand font-bold">
                Age<span className="font-Lato font-normal">18</span>
              </p>
              <p className="flex items-center justify-between gap-4 text-black-01 font-Quicksand font-bold">
                Quotes:{" "}
                <span className="font-Lato font-normal">
                  A man only dies if he is forgotten
                </span>
              </p>
            </div>

            <div className="flex gap-4 mt-10">
              <Link className="btn bg-green-01 w-fit text-white">
                <EditIcon />
                <span className="hidden md:block">Edit</span>
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
