import React from "react";
import { Link } from "react-router-dom";
import { LeftArrow } from "../../../commons/Icons/Icons";
<<<<<<< HEAD
import Shipping from "../../Shipping";
=======
>>>>>>> a8505f672081936549c121ed3cc1a5c9c3cc8a6e

const EmptyCart = () => {
  return (
    <section>
      <div className="container-custom pt-[100px]">
        <div>
          <h1 className="font-Quicksand font-bold text-heading text-black-01 leading-normal text-center mb-6">
            Shopping Cart Is <span className="text-green-01">Empty</span>
          </h1>

          <p className="text-center text-gray-01 mb-10">
            Go to shop and add to cart products you’d like to buy.
          </p>

          <Link to="/shop" className="flex items-center gap-2 w-fit text-white font-Quicksand font-bold candy-menu px-5 py-3 mx-auto rounded">
            <LeftArrow /> Return to Shop
          </Link>
        </div>

      </div>
    </section>
  );
};

export default EmptyCart;
