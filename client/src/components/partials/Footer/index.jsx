import React from "react";
import NavBrand from "../../commons/Navbrand/NavBrand";
import Contact from "./Contact";
import CopyRight from "./CopyRight";
import FooterNavigation from "./FooterNavigation";
import SocialNetworks from "./SocialNetworks";

const footerLinks = {
  company: ["About Us", "Service", "Case Studies", "Blog", "Contact"],
  account: [
    "Sign in",
    "View Cart",
    "My Wishlist",
    "Track My Order",
    "Compare Products",
  ],
};

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="flex flex-wrap container-custom mx-auto py-[60px]">
        <div className="basis-full md:basis-1/3">
          <NavBrand />
          <SocialNetworks />
          <Contact />
        </div>
        <div className="basis-1/2 md:basis-1/3 font-Quicksand font-bold">
          <FooterNavigation title="company" content={footerLinks.company} />
        </div>
        <div className="basis-1/2 md:basis-1/3 font-Quicksand font-bold">
          <FooterNavigation title="account" content={footerLinks.account} />
        </div>
        <CopyRight />
      </div>
    </footer>
  );
};

export default Footer;
