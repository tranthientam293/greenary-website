import React from "react";

const FooterNavigation = (props) => {
  return (
    <>
      <h4 className="text-xl text-black-01 capitalize mb-6">{props.title}</h4>
      <ul>
        {props.content.map((item, index) => {
          return (
            <li key={index} className="mb-6">
              <a href="" className="text-gray-01 capitalize">
                {item}
              </a>
            </li>
          );
        })}
      </ul> 
    </>
  );
};

export default FooterNavigation;
