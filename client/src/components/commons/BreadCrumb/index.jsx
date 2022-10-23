import React from "react";

const BreadCrumb = (props) => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center mb-[100px]">
      <div className="container-custom py-16">
        <h1 className="font-Quicksand font-bold text-heading leading-normal text-black-01 mb-6">
          {props.title}
        </h1>
        <div className="text-base">
          <span className=" text-green-01 after:content-['>']"> Home </span>{" "}
          <span> {props.title}</span>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
