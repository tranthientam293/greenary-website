import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <main className="mt-[49px] sm:mt-[123px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
