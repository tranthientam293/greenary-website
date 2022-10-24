import React from "react";
import { Form, Link } from "react-router-dom";
import { RightArrow } from "../../commons/Icons/Icons";
import milk from "../../../assets/Banner/milk.png";
import peach from "../../../assets/Banner/peach.png";

const Banner = () => {
  return (
    <div className="w-full hero-pattern bg-cover bg-center py-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8 container-custom">
        <div className="relative w-full bg-blue-02 rounded-lg py-10 lg:py-20 lg:px-5">
          <div className="">
            <img src={milk} alt="rice drink" className="mx-auto lg:mr-0" />
          </div>
          <div className="absolute w-full lg:w-3/5 top-1/2 -tranlate-x-1/2 -translate-y-1/2 px-5">
            <h1 className="font-Quicksand font-bold text-4xl text-center sm:text-left lg:text-heading leading-normal text-black-01 mb-5">
              Rice drink with vitamin D3
            </h1>
            <p className="text-lg text-gray-01 text-center sm:text-left mb-8">
              Up to 30% off your first order
            </p>

            <Form action="" className="flex flex-col md:flex-row w-full">
              <input
                type="text"
                placeholder="Enter your email address"
                className="basis-full text-gray-01 rounded sm:rounded-r-none py-4 px-6 focus:outline-none
                my-4 md:my-0"
              />
              <button
                type="submit"
                className="font-Quicksand font-bold text-white candy-menu rounded px-5 py-3"
              >
                Subcrible
              </button>
            </Form>
          </div>
        </div>

        <div className="relative w-full lg:basis-2/5 bg-orange-02 rounded-lg">
          <div className="absolute top-1/2 w-full font-Quicksand font-bold -translate-y-1/2 px-8 z-10">
            <h2 className="lg:w-3/4 text-black-01 text-4xl lg:text-[42px] leading-none mb-8">
              Buy with <br className="lg:hidden"></br>
              <span className="text-green-01">free shipping</span>
            </h2>
            <Link
              to=""
              className="flex items-center w-fit gap-3 candy-menu text-white px-5 py-3 rounded capitalize"
            >
              Shop now
              <span>
                <RightArrow />
              </span>
            </Link>
          </div>
          <img
            src={peach}
            alt="promotion-image"
            className="sm:absolute bottom-0 right-0 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
