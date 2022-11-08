import axios from "axios";
import React, { useEffect } from "react";
import Banner from "../components/partials/Banner";
import ProductNavTab from "../components/partials/ProductNavTab";
import Products from "../components/partials/Products";
import Shipping from "../components/partials/Shipping";
import useAuthContext from "../context/AuthContext";
import { useShoppingCartContext } from "../context/ShoppingContext";

const HomeView = () => {
  
  return (
    <>
      <Banner />
      <ProductNavTab title={"Shop by Categories"} />
      <Products title={"Popular Products"} />
      <Shipping />
    </>
  );
};

export default HomeView;
