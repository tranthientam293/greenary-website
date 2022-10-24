import React from "react";
import BreadCrumb from "../components/commons/BreadCrumb/index";
import About from "../components/partials/About";

const AboutView = () => {
  return (
    <>
      <BreadCrumb title={"About Us"} />
      <About/>
    </>
  );
};

export default AboutView;
