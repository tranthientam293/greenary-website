import React from "react";
import { Form, Link } from "react-router-dom";
import { RightArrow } from "../../commons/Icons/Icons";
import milk from "/milk.png";
import peach from "/peach.png";

const BannerCarousel = () => {
  return (
    <div className="md:col-span-8 relative bg-blue-02 rounded-lg py-10 lg:py-20 lg:px-5">
      <img src={milk} alt="rice drink" className="mx-auto lg:mr-0" />

      <div className="absolute top-1/2 -tranlate-x-1/2 -translate-y-1/2 w-full lg:w-3/5 px-5">
        <h1 className="text-center md:text-left text-black-01 mb-5">
          Rice drink with vitamin D3
        </h1>
        <p className="para-3 text-center md:text-left mb-8">
          Up to 30% off your first order
        </p>

        <Form action="" className="flex flex-col md:flex-row w-full">
          <input
            type="text"
            placeholder="Enter your email address"
            className="basis-full sm:rounded-r-none my-4 md:my-0"
          />
          <button type="submit" className="btn btn-primary">
            Subcrible
          </button>
        </Form>
      </div>
    </div>
  );
};

const BannerPromotion = () => {
  return (
    <div className="md:col-span-4 relative bg-orange-02 rounded-lg">
      <div className="absolute top-1/2 w-full -translate-y-1/2 px-8 z-10">
        <h2 className="lg:w-3/4 mb-8">
          Buy with <br className="lg:hidden"></br>
          <span className="text-green-01">free shipping</span>
        </h2>
        <Link
          to="/shop"
          className="btn btn-primary w-fit capitalize"
        >
          Shop now
          <RightArrow />
        </Link>
      </div>
      <img
        src={peach}
        alt="promotion-image"
        className="absolute bottom-0 right-0 mx-auto"
      />
    </div>
  );
};

const Banner = () => {
  return (
    <section className="background-vegetable py-8">
      <div className="grid md:grid-cols-12 auto-rows-fr gap-[30px] container-custom">
        <BannerCarousel />
        <BannerPromotion />
      </div>
    </section>
  );
};

export default Banner;
