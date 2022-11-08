import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Cart } from "../components/commons/Icons/Icons";
import Rating from "../components/commons/Rating/Rating";
import Shipping from "../components/partials/Shipping";
import useAuthContext from "../context/AuthContext";
import { useShoppingCartContext } from "../context/ShoppingContext";
import formatCurrency from "../ultilities/formatCurrency";

const ProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { increaseProductQuantity } = useShoppingCartContext();
  const { logged, getUser } = useAuthContext();

  const user = getUser();

  useEffect(() => {
    axios
      .get(`https://greenery-server.herokuapp.com/api/products/${productId}`)
      .then((res) => setProduct(res.data.product))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="mt-[200px]">
      <div className="grid md:grid-cols-2 gap-[30px] container-custom ">
        <div>
          <img
            src={product.imageUrl}
            alt="product image"
            className="w-full aspect-1/1"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h4 className="text-green-01 capitalize">{product.category}</h4>
            <h3>{product.title}</h3>
          </div>

          <div>
            <Rating rating={product.rating} />
          </div>
          <div>
            <h4>Price for 1kg</h4>
            <h2>{formatCurrency(product.price)}</h2>
          </div>
          <p className="para-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit est,
            quas praesentium minima sint dolorum, dolorem ab repellat pariatur
            rerum optio suscipit veritatis, unde similique ipsam. Nihil laborum
            ad accusamus.
          </p>

          <div>
            {logged ? (
              <button
                className="btn btn-secondary"
                onClick={() => increaseProductQuantity(product)}
              >
                <Cart /> Add to Cart
              </button>
            ) : (
              <Link className="btn btn-primary" to="/auth/login">
                Please login to buy
              </Link>
            )}
          </div>
        </div>
      </div>

      <Shipping />
    </section>
  );
};

export default ProductView;
