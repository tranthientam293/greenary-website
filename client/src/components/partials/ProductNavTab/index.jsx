import React from "react";
import { CardNavTab } from "../../commons/Card/Card";
import SetsIcon, {
  DrinksIcon,
  FruitIcon,
  FungiIcon,
  GreeneryIcon,
  GroceriesIcon,
  SweetsIcon,
  VegetableIcon,
} from "../../commons/Icons/TabIcons";
import SectionHeader from "../../commons/SectionHeader/SectionHeader";
import Tabs from "./Tabs";
import orange from "./img/bg-01.png";
import fruits from "./img/bg-02.png";
import strawberry from "./img/bg-03.png";

const ProductNavTab = () => {
  const tabs = [
    {
      icon: <SetsIcon />,
      name: "sets",
      background: "bg-green-02",
    },
    {
      icon: <FruitIcon />,
      name: "fruits",
      background: "bg-gray-02",
    },
    {
      icon: <VegetableIcon />,
      name: "vegetables",
      background: "bg-pink-02",
    },
    {
      icon: <GreeneryIcon />,
      name: "greenery",
      background: "bg-blue-02",
    },
    {
      icon: <FungiIcon />,
      name: "Fungi",
      background: "bg-orange-02",
    },
    {
      icon: <GroceriesIcon />,
      name: "groceries",
      background: "bg-pink-02",
    },
    {
      icon: <SweetsIcon />,
      name: "sweets",
      background: "bg-green-02",
    },
    {
      icon: <DrinksIcon />,
      name: "drinks",
      background: "bg-gray-02",
    },
  ];

  const tabContent = [
    {
      background: orange,
      text: "Vegetarian and vegan products",
    },
    {
      background: fruits,
      text: "Vegetables and fruits for a balanced diet",
    },
    {
      background: strawberry,
      text: "Delicious energy for every day",
    },
  ];

  return (
    <section className="mt-[100px]">
      <div className="container-custom">
        <SectionHeader text={"Shop by Categories"} />

        <div className="flex justify-between grow-0 gap-2 overflow-x-scroll mb-[100px]">
          {tabs.map((tab, index) => {
            return <Tabs {...tab} key={index} />;
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-[30px] w-full mb-[100px]">
          {tabContent.map((content, index) => {
            return <CardNavTab {...content} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductNavTab;
