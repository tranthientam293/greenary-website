import React from "react";
import { StarRating } from "../Icons/Icons";

const Rating = (props) => {
  const rating = props.rating;
  const star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      star.push("#FDC040");
    } else {
      star.push("#939393");
    }
  }
  return (
    <div className="flex gap-2">
      {star.map((item, index) => {
        return <StarRating background={item} key={index} />;
      })}
    </div>
  );
};
export default Rating;
