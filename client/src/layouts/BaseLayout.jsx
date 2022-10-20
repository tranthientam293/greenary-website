import React from "react";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";

const BaseLayout = () => {
  return (
    <div>
      <Header />
      <main className="h-[1000px]"></main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
