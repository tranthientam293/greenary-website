import React from "react";
import { Form } from "react-router-dom";
import shipping from "./img/Shipping.png";
import background from "./img/BGImage.png";

const Shipping = () => {
  return (
    <section className="mt-[100px]">
      <div
        className={`flex flex-col-reverse lg:flex-row items-center justify-between gap-12 container-custom hero-pattern bg-cover bg-center p-12`}
      >
        <div>
          <div className="mb-8">
            <h2 className="font-Quicksand font-bold text-4xl lg:text-heading-2 leading-normal mb-6">
              Stay home & get your daily needs from our shop
            </h2>
            <p className="text-gray-01 text-lg">
              Start Your Daily Shopping with
              <span className="text-green-01">Greenery</span>
            </p>
          </div>
          <Form className="w-full lg:w-3/4">
            <input
              type="text"
              placeholder="Enter your email address"
              className="w-full bg-white px-5 py-3 mb-3 rounded"
            />
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full bg-white px-5 py-3 mb-3 rounded"
            />
            <button className="w-full font-Quicksand text-white candy-menu rounded px-5 py-3">
              Subcrible
            </button>
          </Form>
        </div>

        <img src={shipping} alt="Shipping image" />
      </div>
    </section>
  );
};

export default Shipping;
