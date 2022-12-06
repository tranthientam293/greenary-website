import { useEffect } from "react";
import { useState } from "react";
import { RightArrow, Search } from "../../commons/Icons/Icons";
import SetsIcon, {
  DrinksIcon,
  FruitIcon,
  FungiIcon,
  GreeneryIcon,
  GroceriesIcon,
  SweetsIcon,
  VegetableIcon,
} from "../../commons/Icons/TabIcons";

const SidebarHeading = (props) => {
  return (
    <h4 className="pb-3 border-b-gray-01 border-b-[1px] mb-6">{props.title}</h4>
  );
};

const SearchBar = () => {
  return (
    <div className="flex items-center justify-between border-[1px] border-green-02 rounded px-6 py-2 mb-10">
      <Search color={"#939393"} />
      <input type="text" className="p-0" placeholder="Search..." />
      <RightArrow color={"#27CA7D"} />
    </div>
  );
};

const CatalogueFilter = () => {
  const classCustom = "w-8 h-8";
  const [active, setActive] = useState("");

  const tabs = [
    {
      icon: <SetsIcon classCustom={classCustom} />,
      name: "sets",
    },
    {
      icon: <FruitIcon classCustom={classCustom} />,
      name: "fruits",
    },
    {
      icon: <VegetableIcon classCustom={classCustom} />,
      name: "vegetables",
    },
    {
      icon: <GreeneryIcon classCustom={classCustom} />,
      name: "greenery",
    },
    {
      icon: <FungiIcon classCustom={classCustom} />,
      name: "Fungi",
    },
    {
      icon: <GroceriesIcon classCustom={classCustom} />,
      name: "groceries",
    },
    {
      icon: <SweetsIcon classCustom={classCustom} />,
      name: "sweets",
    },
    {
      icon: <DrinksIcon classCustom={classCustom} />,
      name: "drinks",
    },
  ];
  return (
    <div className="mb-10">
      <SidebarHeading title={"Category"} />

      <div className="flex flex-col justify-between grow-0 gap-2 ">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.name}
              className="flex items-center gap-2 w-full text-green-01  mb-2 p-2 border-gray-02 border-[1px] rounded"
              onClick={() => {
                setActive(tab.name);
              }}
            >
              <span className="">{tab.icon}</span>
              <p
                className={
                  tab.name === active
                    ? "font-bold text-sm text-green-01 capitalize mr-auto"
                    : "font-bold text-sm text-black-01 capitalize mr-auto"
                }
              >
                {tab.name}
              </p>

              <span className="flex justify-center items-center w-6 h-6 bg-gray-02 text-black-01 text-xs rounded-full">
                12
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const PriceFilter = () => {
  const MAX = 100;
  const MIN = 0;
  const STEP = 1;
  const [price, setPrice] = useState(10);
  return (
    <div className="mb-10">
      <SidebarHeading title={"Fill by price"} />
      <div className="relative top-0 left-0  h-1 w-full bg-gray-02 p-0 rounded-none z-0 mb-3">
        <div
          style={{ right: 100 - price + "%" }}
          className="absolute top-0 left-0 h-1 bg-blue-01 z-100"
        ></div>

        <input
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={price}
          className="absolute top-0 input-range input-range-thumb z-1000"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <label htmlFor="price-filter">Max. Price</label>
        <input
          id="price-filter"
          type="number"
          min={MIN}
          max={MAX}
          step={STEP}
          className="block w-1/2 border-green-01 border-[1px]"
          value={price}
          onChange={(e) => {
            let value = 0;
            if (e.target.value > MAX) {
              value = MAX;
            } else if (e.target.value < MIN) {
              value = MIN;
            } else {
              value = e.target.value;
            }
            setPrice(value);
          }}
        />
      </div>
    </div>
  );
};

const SeasonalFilter = () => {
  const season = [
    { id: 1, name: "October-February" },
    { id: 2, name: "May-July" },
    { id: 3, name: "November-February" },
    { id: 4, name: "August-October" },
    { id: 5, name: "June-September" },
    { id: 6, name: "All year long" },
  ];
  return (
    <div className="mb-10">
      <SidebarHeading title={"Seasonal"} />

      <ul>
        {season.map((item) => {
          return (
            <li className="relative py-2 mb-1" key={item.id}>
              <input
                type="checkbox"
                name={item.name}
                id={item.name}
                className="mr-3"
              />
              <label htmlFor={item.name}>{item.name}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const ManufacturerFilter = () => {
  const season = [
    { id: 1, name: "Vietnam" },
    { id: 2, name: "Israel" },
    { id: 3, name: "USA" },
    { id: 4, name: "Australia" },
    { id: 5, name: "Netherlands" },
    { id: 6, name: "All" },
  ];
  return (
    <div className="mb-10">
      <SidebarHeading title={"Manufacturer"} />

      <ul>
        {season.map((item) => {
          return (
            <li className="relative py-2 mb-1" key={item.id}>
              <input
                type="checkbox"
                name={item.name}
                id={item.name}
                className="mr-3"
              />
              <label htmlFor={item.name}>{item.name}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const Sidebar = () => {
  return (
    <aside>
      <SearchBar />
      <CatalogueFilter />
      <PriceFilter />
      <SeasonalFilter />
      <ManufacturerFilter />
      <button className="btn btn-primary w-full">Filter</button>
    </aside>
  );
};

export default Sidebar;
