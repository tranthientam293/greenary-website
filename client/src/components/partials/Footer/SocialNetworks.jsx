import React from "react";
import { Facebook, Instagram, Twitter, Whatsapp, YouTube } from "../../commons/Icons/Icons";

const SocialNetworks = () => {
  const networkIcons = [
    <Facebook />,
    <Twitter />,
    <Instagram />,
    <YouTube />,
    <Whatsapp />,
  ];

  return (
    <ul className="flex items-center gap-3 my-8">
      {networkIcons.map((item, index) => {
        return (
          <li key={index}>
            <a href="" className="text-gray-01">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialNetworks;
