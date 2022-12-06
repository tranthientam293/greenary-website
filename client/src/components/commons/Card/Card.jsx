import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../../context/ShoppingContext";
import formatCurrency from "../../../ultilities/formatCurrency";

import { RightArrow, ViewIcon } from "../Icons/Icons";

import Rating from "../Rating/Rating";

const CardNavTab = ({ background, text }) => {
  return (
    <div className="relative w-full min-h-[230px] bg-orange-02 rounded-lg pl-8 pt-24 pb-8 pr-24">
      <div className="relative z-10">
        <h4 className="text-black-01 mb-4 ">{text}</h4>

        <Link to="/shop" className="btn btn-primary w-fit capitalize">
          shop now <RightArrow />
        </Link>
      </div>

      <img
        src={background}
        alt="card image"
        className="absolute bottom-6 right-2 z-0"
      />
    </div>
  );
};

const Card = ({
  _id,
  imageUrl,
  title,
  status,
  rating,
  price,
  promotion,
  category,
}) => {
  const { increaseProductQuantity } = useShoppingCartContext();

  return (
    <div
      className={
        "relative border-solid border-gray-01 border-[0.5px] rounded-lg p-3 overflow-hidden " +
        status
      }
    >
      <div className="relative mb-5">
        <img src={imageUrl} alt="card-image" className="block max-w-[240px] aspect-[1] mx-auto" />
      </div>

      <div className="px-2 text-gray-01">
        <p className="para-1 mb-3 capitalize">{category}</p>
        <h4 className="text-black-01 mb-3">{title}</h4>
        <div className="flex items-center gap-1 mb-3">
          <div>
            <Rating rating={rating} />
          </div>
          <span className="text-black-01 ml-2">({rating.toFixed(1)})</span>
        </div>
        <div className="flex items-end justify-between gap-2 mb-1">
          <div className="text-black-01">
            <p className="para-1 mb-3">Price per kg</p>
            <p className=" flex gap-1 items-baseline  text-black-01">
              {formatCurrency(price * (1 - promotion))}
              <span className="text-sm text-gray-01 line-through">
                {formatCurrency(price)}
              </span>
            </p>
          </div>

          <Link to={`/shop/${_id}`} className="btn btn-secondary">
            <ViewIcon /> Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProvideCard = ({ title, icon }) => {
  return (
    <div className="relative bg-white border-solid border-gray-02 border-[0.5px] rounded-lg mt-16">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit bg-white border-solid border-gray-02 border-[0.5px] rounded-full p-6">
        <img src={icon} alt="card-icon" />
      </div>
      <div className="text-center p-8">
        <h4 className="text-black-01 mt-14 mb-4">{title}</h4>
        <p className="para-1 mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form
        </p>

        <Link className="btn btn-secondary w-fit mx-auto">Read more</Link>
      </div>
    </div>
  );
};

const BlogCard = ({ title, thumbnail, date, author, avatar, summary }) => {
  return (
    <Link>
      <img src={thumbnail} alt="thumbnail" className="w-full" />
      <div className="mt-6">
        <div className="flex items-center gap-2 para-1 text-gray-01 leading-none mb-4">
          Category
          <span className="w-2 h-2 bg-green-01 text-lg rounded-full"></span>
          {date}
        </div>
        <h4 className=" mb-4">{title}</h4>
        <p className="para-1 mb-4">{summary}</p>

        <div className="flex items-center gap-3 text-sm text-black-01">
          <img src={avatar} alt="user-avatar" className="w-8 aspect-[1]" />
          {author}
        </div>
      </div>
    </Link>
  );
};
export default Card;
export { CardNavTab, ProvideCard, BlogCard };
