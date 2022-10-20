import React from "react";
import { Calling, Mail, Place, TimeCircle } from "../../commons/Icons";

const Contact = () => {
  const footerTexts = [
    {
      icon: <Calling />,
      content: "(406) 555-0120",
    },
    {
      icon: <Mail />,
      content: "name@email.com",
    },
    {
      icon: <Place />,
      content: "6391 Elgin St. Celina, Delaware 10299",
    },
    {
      icon: <TimeCircle />,
      content: "10:00 - 18:00, Mon - Sat",
    },
  ];

  return (
    <div>
      <ul className="pb-2">
        {footerTexts.map((item, index) => {
          return (
            <li key={index} className="mb-6">
              <a href="" className="flex items-center gap-1 text-green-01">
                {item.icon}
                <span className="text-black-01">{item.content}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Contact;
