import React from "react";
import BreadCrumb from "../components/commons/BreadCrumb";
import ContactUs from "../components/partials/Contact";
import Shipping from "../components/partials/Shipping";

const ContactView = () => {
  return (
    <>
      <BreadCrumb title={"Contact Us"} />
      <ContactUs />
      <Shipping />
    </>
  );
};

export default ContactView;
