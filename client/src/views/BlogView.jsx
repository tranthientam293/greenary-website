import React from "react";
import BreadCrumb from "../components/commons/BreadCrumb";
import Blog from "../components/partials/Blog";
import Shipping from "../components/partials/Shipping/index";

const BlogView = () => {
  return (
    <>
      <BreadCrumb title={"Blog & News"} />
      <Blog />
      <Shipping />
    </>
  );
};

export default BlogView;
