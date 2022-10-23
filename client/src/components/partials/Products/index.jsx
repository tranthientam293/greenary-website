import React from "react";
import Card from "../../commons/Card/Card";
import SectionHeader from "../../commons/SectionHeader/SectionHeader";
import ProductsContainer from "./ProductsContainer";

const Products = () => {
  const products = ProductsContainer();
  return (
    <section className="mt-[100px]">
      <div className="container-custom">
        <SectionHeader text={"Popular Products"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {products.map((product, index) => {
            return <Card {...product} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
