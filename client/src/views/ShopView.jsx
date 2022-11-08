import React, { useEffect } from "react";
import BreadCrumb from "../components/commons/BreadCrumb";
import Shop from "../components/partials/Shop";

const ShopView = () => {
  return (
    <>
      <BreadCrumb title={"Shop"} />
      <Shop  />
    </>
  );
};

export default ShopView;
