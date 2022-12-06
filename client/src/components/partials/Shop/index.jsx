import React from "react";
import Products from "../Products";
import Sidebar from "./Sidebar";

const Shop = () => {
  return (
    <section>
      <div className="container-custom mt-[100px]">
        <div className="grid grid-cols-12 gap-[30px]">
          <aside className="col-span-3">
            <Sidebar />
          </aside>
          <div className="col-span-9">
            <Products />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
