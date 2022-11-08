import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/partials/Footer";
import Header from "../components/partials/Header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="mt-[49px] sm:mt-[123px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default BaseLayout;
