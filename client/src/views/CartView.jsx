import React from "react";
import OccupiedCart from "../components/partials/Cart/OccupiedCart";
import Shipping from "../components/partials/Shipping";
import useAuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const CartView = () => {
  const { logged } = useAuthContext();

  return (
    <>
      {logged ? (
        <OccupiedCart />
      ) : (
        <div className="container-custom text-center mt-[200px]">
          <h4>
            You need{" "}
            <Link to="/auth/login" className="underline text-blue-01">
              log in
            </Link>{" "}
            to view cart
          </h4>
        </div>
      )}
      <Shipping />
    </>
  );
};

export default CartView;
