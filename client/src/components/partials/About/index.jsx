import React from "react";
import { ProvideCard } from "../../commons/Card/Card";

import aboutIMG01 from "./img/about-img-01.png";
import aboutIMG02 from "./img/about-img-02.png";
import aboutIMG03 from "./img/about-img-03.png";
import aboutIMG04 from "./img/about-img-04.png";

import icon01 from "./img/icon-01.png";
import icon02 from "./img/icon-02.png";
import icon03 from "./img/icon-03.png";
import icon04 from "./img/icon-04.png";
import icon05 from "./img/icon-05.png";
import icon06 from "./img/icon-06.png";

const WelcomeSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-end gap-[30px]">
      <div className="md:basis-1/2">
        <img src={aboutIMG01} alt="about-image" className="w-full rounded-lg" />
      </div>

      <div className="md:basis-1/2">
        <h2 className="heading-secondary mb-6">
          Welcome to <span className="text-green-01">Greenery</span>
        </h2>
        <p className="text-gray-01 text-justify mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p className="text-gray-01 text-justify mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate id est laborum.
        </p>
        <p className="text-gray-01 text-justify mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate id est laborum.
        </p>

        <div className="hidden lg:flex justify-between items-center mt-32">
          <img src={aboutIMG02} alt="about-img" className="rounded-lg" />
          <img src={aboutIMG03} alt="about-img" className="rounded-lg" />
          <img src={aboutIMG04} alt="about-img" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

const ProvideSection = () => {
  const provisions = [
    { title: "Best Prices & Offers", icon: icon01 },
    { title: "Wide Assortment", icon: icon02 },
    { title: "Free Delivery", icon: icon03 },
    { title: "Easy Returns", icon: icon04 },
    { title: "100% Satisfaction", icon: icon05 },
    { title: "Great Daily Deal", icon: icon06 },
  ];
  return (
    <div className="mt-[100px]">
      <h2 className="heading-secondary text-center mb-10">
        What We <span className="text-green-01">Provide</span>?
      </h2>

      <div className="grid grid-cols-3 gap-[30px]">
        {provisions.map((item, index) => {
          return <ProvideCard key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

const Achivement = () => {
  const contents = [
    {
      title: "10k",
      text: "Glorious years",
    },
    {
      title: "34+",
      text: "Happy Clients",
    },
    {
      title: "12+",
      text: "Projects complete",
    },
    {
      title: "110+",
      text: "Products sale",
    },
  ];
  return (
    <div className="flex hero-pattern bg-cover bg-center about rounded-xl p-16 mt-[100px]">
      {contents.map((content, index) => {
        return (
          <div className="basis-1/4 text-center" key={index}>
            <h1 className="heading-primary ">{content.title}</h1>
            <p className="text-green-01 font-semibold">{content.text}</p>
          </div>
        );
      })}
    </div>
  );
};

const About = () => {
  return (
    <section>
      <div className="container-custom mt-[100px]">
        <WelcomeSection />
        <ProvideSection />
        <Achivement />
      </div>
    </section>
  );
};

export default About;
