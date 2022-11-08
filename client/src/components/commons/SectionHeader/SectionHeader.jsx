import React from "react";

const SectionHeader = (props) => {
  const [firstValue, ...rest] = props.text.split(" ");

  return (
    <h2 className="mb-10">
      {firstValue} <span className="text-green-01">{rest.join(" ")}</span>
    </h2>
  );
};

export default SectionHeader;
