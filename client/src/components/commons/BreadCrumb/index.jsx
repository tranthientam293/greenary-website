import React from "react";
import { ChevronRight, HomeIcon } from "../Icons/Icons";

const BreadCrumb = (props) => {
  return (
    <section className="hero-pattern bg-cover bg-center mb-[100px]">
      <div className="container-custom py-16">
        <h1 className="font-Quicksand font-bold text-heading leading-normal text-black-01 mb-6">
          {props.title}
        </h1>
        <div className="flex items-center gap-3 text-base">
          <span className="flex items-start gap-2 text-green-01">
            <HomeIcon /> Home
          </span>
          <span className=" text-gray-01 ">
            <ChevronRight />
          </span>
          <span className="text-gray-01"> {props.title}</span>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
