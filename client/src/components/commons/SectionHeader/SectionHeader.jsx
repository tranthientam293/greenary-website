import React from "react";

const SectionHeader = (props) => {
  const [firstValue, ...rest] = props.text.split(" ");

  return (
    <h2 className="font-Quicksand font-semibold text-heading-2 text-green-01 mb-10">
      <span className="text-black-01">{firstValue}</span> {rest.join(" ")}
    </h2>
  );
};

export default SectionHeader;
