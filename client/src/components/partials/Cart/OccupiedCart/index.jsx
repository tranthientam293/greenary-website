import {
  Cart,
  LeftArrow,
  SaveIcon,
  UpdateIcon,
} from "../../../commons/Icons/Icons";
import { useShoppingCartContext } from "../../../../context/ShoppingContext";
import CartItem from "../../../commons/CartItem/CartItem";
import formatCurrency from "../../../../ultilities/formatCurrency";
import { Link } from "react-router-dom";
import axios from "axios";

const OccupiedCart = () => {
  const { cartItems, setCartItems, cartQuantity } = useShoppingCartContext();

  const subTotal = cartItems.reduce(function (total, cartItem) {
    return (
      total +
      (cartItem?.price * (1 - cartItem.promotion) || 0) * cartItem.quantity
    );
  }, 0);

  const discount = 0;
  const shipping = 0;
  const tax = 0.1;
  const taxTotal = subTotal * tax;

  const user = JSON.parse(sessionStorage.getItem("auth"));

  const syncCartHandler = () => {
    const config = {
      method: "get",
      url: `https://greenery-server.herokuapp.com/api/cart/${user._id}/`,
      headers: {
        token: `Bearer ${user.accessToken}`,
      },
    };
    axios(config)
      .then(function (response) {
        if (response.data.result) setCartItems([...response.data.result]);
        console.log(cartItems);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const saveCartHandler = () => {
    const data = JSON.stringify(
      cartItems.map((item) => {
        return {
          productId: item._id,
          quantity: item.quantity,
        };
      })
    );

    var config = {
      method: "post",
      url: `https://greenery-server.herokuapp.com/api/cart/${user._id}/add`,
      headers: {
        token: `Bearer ${user.accessToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const placeOrder = () => {
    const productsArr = cartItems.map((item) => {
      return {
        productId: item._id,
        quantity: item.quantity,
      };
    });
    const data = JSON.stringify({
      products: productsArr,
      address: "HCMC, Viet Nam",
      totalPayment: taxTotal + subTotal,
    });

    const config = {
      method: "post",
      url: `https://greenery-server.herokuapp.com/api/order/${user._id}`,
      headers: {
        token: `Bearer ${user.accessToken}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCartItems([]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section>
      <div className="container-custom mt-[100pt]">
        <h2>Shopping Cart </h2>
        <p>
          There are{" "}
          <span>
            {cartItems.length > 1
              ? `${cartItems.length} products`
              : `${cartItems.length} product`}
          </span>{" "}
          in your cart
        </p>

        <div className="grid lg:grid-cols-12 gap-[30px]">
          <div className="lg:col-span-8">
            <div className="flex justify-between px-5 py-3  border-b-gray-01 border-b-[1px]">
              <h4 className="basis-2/6">Product</h4>
              <h4 className="basis-1/6 text-center">Price</h4>
              <h4 className="basis-1/6 text-center">Quantity</h4>
              <h4 className="basis-1/6 text-center">Total</h4>
              <h4 className=" text-center"></h4>
            </div>
            {cartItems.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}

            <div className="flex flex-col-reverse sm:flex-row justify-between  gap-4 items-center mt-11">
              <Link to="/shop" className="btn btn-secondary">
                <LeftArrow />
                Continue Shopping
              </Link>
              <div className="flex gap-2">
                <button
                  className="btn bg-red-01 text-white"
                  onClick={saveCartHandler}
                >
                  <SaveIcon /> Save
                </button>

                <button
                  className="btn bg-orange-01 text-white"
                  onClick={syncCartHandler}
                >
                  <UpdateIcon /> Sync
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 pt-14">
            <div className="p-5 border-gray-01 border-[1px] rounded-lg">
              <div className="flex justify-between items-center py-4 border-dashed border-gray-01 border-b-[1px]">
                <h4>Subtotal</h4>{" "}
                <p className="text-black-01">{formatCurrency(subTotal)}</p>
              </div>
              <div className="flex justify-between items-center py-4 border-dashed border-gray-01 border-b-[1px]">
                <h4>Discount</h4>{" "}
                <p className="text-black-01">{formatCurrency(discount)}</p>
              </div>
              <div className="flex justify-between items-center py-4 border-dashed border-gray-01 border-b-[1px]">
                <h4>Shipping</h4>{" "}
                <p className="text-black-01">
                  {shipping ? formatCurrency(shipping) : "Free"}
                </p>
              </div>
              <div className="flex justify-between items-center py-4 border-gray-01 border-b-[1px]">
                <h4>Estimated Tax</h4>{" "}
                <p className="text-black-01">{formatCurrency(taxTotal)}</p>
              </div>
              <div className="flex justify-between items-center py-4 ">
                <h4>Total</h4>{" "}
                <p className="text-black-01">
                  {formatCurrency(taxTotal + subTotal)}
                </p>
              </div>

              <Link
                to=""
                className="btn btn-primary w-full mx-auto"
                onClick={placeOrder}
              >
                <Cart />
                Check out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OccupiedCart;
