import React, { useEffect, useState } from "react";
import Card from "../../commons/Card/Card";
import SectionHeader from "../../commons/SectionHeader/SectionHeader";
import axios from "axios";
import Pagination from "../../commons/Pagination";

const Products = (props) => {
  const [allProducts, setAllProdcuts] = useState([]);

  useEffect(() => {
    axios
      .get("https://greenery-server.herokuapp.com/api/products/")
      .then((res) => {
        setAllProdcuts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="mt-[100px]">
      <div className="container-custom">
        {props.title && <SectionHeader text={props.title} />}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 xl:${
            props.maxGrid ? props.maxGrid : ""
          } gap-[30px]`}
        >
          {allProducts.map((product) => {
            return <Card {...product} key={product._id} />;
          })}
        </div>

        <Pagination />
      </div>
    </section>
  );
};

export default Products;
