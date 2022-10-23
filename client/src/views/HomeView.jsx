import React from "react";
import Banner from "../components/partials/Banner";
import ProductNavTab from "../components/partials/ProductNavTab";
import Products from "../components/partials/Products";
import Shipping from "../components/partials/Shipping";

const HomeView = () => {
  return (
    <>
      <Banner />
      <ProductNavTab />
      <Products />
      <Shipping />
    </>
  );
};

export default HomeView;
