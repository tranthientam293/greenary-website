import React from "react";
<<<<<<< HEAD
import { Form, Link } from "react-router-dom";
import shipping from "./img/Shipping.png";
=======
import {  Link } from "react-router-dom";
import shipping from "/Shipping.png";
>>>>>>> a8505f672081936549c121ed3cc1a5c9c3cc8a6e

const Shipping = () => {
  return (
    <section className="mt-[100px]">
      <div
        className={`flex flex-col-reverse lg:flex-row items-center justify-between gap-12 container-custom background-vegetable p-12`}
      >
        <div>
          <div className="mb-8">
            <h2 className="mb-6">
              Stay home & get your daily needs from our shop
            </h2>
            <p className="para-2">
              Start Your Daily Shopping with
              <span className="text-green-01"> Greenery</span>
            </p>
          </div>
          
            <Link to="/auth/signup" className="btn btn-primary w-full mx-auto">Sign Up now</Link>
          
        </div>

        <img src={shipping} alt="Shipping image" />
      </div>
    </section>
  );
};

export default Shipping;
