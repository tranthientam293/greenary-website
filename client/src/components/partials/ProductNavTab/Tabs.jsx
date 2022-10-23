import React from "react";

const Tabs = ({ icon, name, background }) => {
  return (
    <button
      className={`shrink-0 w-[120px] ${background} text-green-01 text-center py-5 rounded-lg mb-2`}
    >
      <span className="">{icon}</span>
      <p className="font-Quicksand font-bold text-black-01 capitalize mt-2">
        {name}
      </p>
    </button>
  );
};

export default Tabs;
